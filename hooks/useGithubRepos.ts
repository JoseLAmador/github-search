import { useQuery } from "react-query";
import fetcher from "@/utils/fetcher";
import { BASE_URL } from "@/utils/contants";
import type { UseQueryOptions } from "react-query";
import type { GithubRepo } from "types/github-repo";
import type { Results } from "types/common";

const headers = new Headers({
  "Content-Type": "application/json;charset=UTF-8",
});

/**
 * TODO: Validate options type
 */
export default function useGithubRepos(search?: string, options: Omit<UseQueryOptions<Results<GithubRepo>>, "githubRepos"> = {}) {
  const key = "githubRepos";

  return useQuery(
    [
      key,
      search || ""
    ],
    async () => {
      const data = await fetcher<Results<GithubRepo>>(`${BASE_URL}/search/repositories?q=${search}&per_page=9`, headers);
      return data;
    },
    options
  )
}