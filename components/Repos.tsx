import RepoCard from "@/components/RepoCard";
import ErrorMessage from "@/components/ErrorMessage";
import type { GithubRepo } from "types/github-repo";

type ReposProps = {
  repos: Array<GithubRepo>;
  search: string;
}

export default function Repos(props: ReposProps){
  const {
    repos,
    search
  } = props;

  const hasRepos = repos?.length > 0;
  const noResultsMessage = `Sorry we didn't find any results matching with: ${search}`;

  return (
    <>
      {
        !hasRepos ? <ErrorMessage message={noResultsMessage} /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos?.map((repo) => (
              <RepoCard
                key={repo?.name}
                html_url={repo?.html_url}
                name={repo?.name}
                description={repo?.description}
                language={repo?.language}
                owner={repo?.owner}
              />
            ))}
          </div>
        )
      }
    </>
  )
}