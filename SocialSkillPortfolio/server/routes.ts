import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve the resume file
  app.get('/resume_2025.pdf', (req, res) => {
    const resumePath = path.join(process.cwd(), 'attached_assets', 'resume_2025.pdf');
    res.sendFile(resumePath);
  });

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
      }

      await sendContactEmail({ name, email, message });
      res.json({ success: true, message: 'Message sent successfully' });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({ error: 'Failed to send message' });
    }
  });

  // GitHub proxy endpoint to avoid CORS issues
  app.get('/api/github/:owner/:repo', async (req, res) => {
    try {
      const { owner, repo } = req.params;
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
      
      if (!response.ok) {
        return res.status(response.status).json({ error: 'Repository not found' });
      }
      
      const data = await response.json();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch repository data' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
