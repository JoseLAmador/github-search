import UserCard from "@/components/UserCard";
import ErrorMessage from "@/components/ErrorMessage";
import type { GithubUser } from "types/github-user"

type UsersProps = {
  users: Array<GithubUser>;
  search: string;
}

export default function Users(props: UsersProps){
  const {
    users,
    search
  } = props;

  const hasUsers = users?.length > 0;
  const noResultsMessage = `Sorry we didn't find any results matching with: ${search}`;

  return (
    <>
      {
        !hasUsers ? <ErrorMessage message={noResultsMessage} /> : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users?.map((user) => (
              <UserCard
                key={user?.login}
                avatar_url={user?.avatar_url || ""}
                login={user?.login || ""}
                html_url={user?.html_url || ""}
                />
            ))}
          </div>
        )
      }
    </>
  )
}