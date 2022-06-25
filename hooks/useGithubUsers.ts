import { useQuery } from "react-query";
import fetcher from "@/utils/fetcher";
import { BASE_URL } from "@/utils/contants";
import type { UseQueryOptions } from "react-query";
import type { GithubUser } from "types/github-user";

const headers = new Headers({
  "Content-Type": "application/json;charset=UTF-8",
});

type GithubUsersDataResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: Array<GithubUser>;
}

/**
 * TODO: Validate options type
 */
export default function useGithubUsers(search?: string, options: Omit<UseQueryOptions<GithubUsersDataResponse>, "githubUsers"> = {}) {
  const key = "githubUsers";

  return useQuery(
    [
      key,
      search || ""
    ],
    async () => {
      const data = await fetcher<GithubUsersDataResponse>(`${BASE_URL}/search/users?q=${search}&per_page=9`, headers);
      return data;
    },
    options
  )
}