import Link from "next/link";
import type { GithubUser } from "types/github-user";

export default function UserCard(props: Pick<GithubUser, "avatar_url" | "login" | "html_url">) {
  const {
    avatar_url,
    login = "",
    html_url = "/",
  } = props;
  return (
    <Link href={html_url}>
      <a target="_blank">
        <div className="p-4 bg-white rounded shadow-xl hover:shadow-2xl flex items-center flex-col space-y-2">
          <div className="shrink-0">
            <img
              className="h-32 w-32 rounded"
              src={avatar_url}
              alt={login} />
          </div>
          <h3 className="text-xl font-medium text-primary-500">{login}</h3>
        </div>
      </a>
    </Link>
  )
}
