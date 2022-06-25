import { useQuery } from "react-query";
import fetcher from "@/utils/fetcher";
import { BASE_URL } from "@/utils/contants";
import type { UseQueryOptions } from "react-query";
import type { GithubRepo } from "types/github-repo";

const headers = new Headers({
  "Content-Type": "application/json;charset=UTF-8",
});

type GithubReposDataResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<GithubRepo>;
}

/**
 * TODO: Validate options type
 */
export default function useGithubRepos(search?: string, options: Omit<UseQueryOptions<GithubReposDataResponse>, "githubRepos"> = {}) {
  const key = "githubRepos";

  return useQuery(
    [
      key,
      search || ""
    ],
    async () => {
      const data = await fetcher<GithubReposDataResponse>(`${BASE_URL}/search/repositories?q=${search}&per_page=9`, headers);
      return data;
    },
    options
  )
}