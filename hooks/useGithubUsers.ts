import { useQuery } from "react-query";
import fetcher from "@/utils/fetcher";
import { BASE_URL } from "@/utils/contants";
import type { UseQueryOptions } from "react-query";
import type { GithubUser } from "types/github-user";
import type { Results } from "types/common";

const headers = new Headers({
  "Content-Type": "application/json;charset=UTF-8",
});

/**
 * TODO: Validate options type
 */
export default function useGithubUsers(search?: string, options: Omit<UseQueryOptions<Results<GithubUser>>, "githubUsers"> = {}) {
  const key = "githubUsers";

  return useQuery(
    [
      key,
      search || ""
    ],
    async () => {
      const data = await fetcher<Results<GithubUser>>(`${BASE_URL}/search/users?q=${search}&per_page=9`, headers);
      return data;
    },
    options
  )
}