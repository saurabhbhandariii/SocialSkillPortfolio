import { useState, useEffect } from 'react';
import { GitHubRepo } from '@/types';

export function useGitHub(repos: string[]) {
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const repoPromises = repos.map(async (repoName) => {
          const response = await fetch(`https://api.github.com/repos/saurabhbhandariii/${repoName}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch ${repoName}`);
          }
          return response.json();
        });

        const repoData = await Promise.all(repoPromises);
        setRepositories(repoData);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
        setRepositories([]);
      } finally {
        setLoading(false);
      }
    };

    if (repos.length > 0) {
      fetchRepos();
    }
  }, [repos.join(',')]);

  return { repositories, loading, error };
}
