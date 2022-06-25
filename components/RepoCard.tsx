import Link from "next/link";
import type { GithubRepo } from "types/github-repo";

export default function RepoCard(props: Pick<GithubRepo, "name" | "html_url" | "description" | "owner" | "language">) {
  const {
    name,
    html_url = "/",
    description = "",
    owner,
    language,
  } = props;

  return (
    <Link href={html_url}>
      <a target="_blank" className="h-full">
        <div className="p-4 bg-white rounded shadow-xl hover:shadow-2xl flex flex-col space-y-2 h-full">
          {
            language ? (
              <p className="text-end">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                  {language}
                </span>
              </p>
            ) : null
          }
          <h3 className="text-xl font-medium text-primary-500 mb-1">{name}</h3>
          <p className="font-base text-primary-400 mb-1">{description}</p>
          <p className="text-xs flex grow items-end"><span className="font-medium mr-1">Owner:</span>{owner?.login}</p>
        </div>
      </a>
    </Link>
  )
}
