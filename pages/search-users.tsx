import NextHead from "next/head";
import { useState } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import TitleSection from "@/components/TitleSection";
import Users from "@/components/Users";
import UserCardSkeleton from "@/components/skeletons/UserCardSkeleton";
import Input from "@/components/Input";
import Skeleton from "@/components/Skeleton";
import ErrorMessage from "@/components/ErrorMessage";
import useGithubUsers from "@/hooks/useGithubUsers";
import useDebounce from "@/utils/useDebounce";
import type { ReactElement } from "react";

/**
 * Display 9 user card skeletons
 */
function UserSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {
        [...Array(9)].map((_, index: number) => <UserCardSkeleton key={index} />)
      }
    </div>
  )
}

function IndexPage(){
  const [ search, setSearch ] = useState("");
  /**
   * Debounced search value
   */
  const searchDebounce = useDebounce(search, 500);

  const { data, isLoading, isError, isIdle } = useGithubUsers(searchDebounce, {
    refetchOnWindowFocus: false,
    enabled: !!searchDebounce // only fetch user if search has value
  });

  const users = data?.items || [];

  return (
    <>
      <NextHead>
        <title>Search users</title>
      </NextHead>
      <TitleSection
        title="Search users"
        description="You can search for Github users">
          <div className="w-full lg:w-1/2 space-y-1">
            <Input
              type="search"
              placeholder="Search user..."
              value={search}
              onChange={(event) => setSearch(event?.target?.value)}
            />
            <p className="text-xs italic text-primary-200">
              Note: If you dont remember any Github user you should try with:
              <button type="button" className="pl-1 underline" onClick={() => setSearch("JoseLAmador")}>
                JoseLAmador
              </button>
            </p>
          </div>
      </TitleSection>

      <section className="px-4 xl:px-0">
        <div className="py-10 mx-auto max-w-screen-xl">
          {
            isIdle ? (
              <>
                <h3 className="text-lg font-medium text-center capitalize mb-2 text-primary-500">
                  start searching
                </h3>
                <p className="text-sm text-primary-400 text-center">
                  Please start searching for a Github user, to see the results.
                </p>
                <p className="text-xs italic text-primary-200 text-center">
                  Note: If you dont remember any Github user you should try with:
                  <button type="button" className="pl-1 underline" onClick={() => setSearch("JoseLAmador")}>
                    JoseLAmador
                  </button>
                </p>
              </>
            ) : (
              <Skeleton on={isLoading} SkeletonComponent={UserSkeleton}>
                {
                  !isError ? <Users search={searchDebounce} users={users} /> :
                  <ErrorMessage message="Try another github user or try again later" />
                }
              </Skeleton>
            )
          }
        </div>
      </section>
    </>
  );
}

IndexPage.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  );
}

export default IndexPage;
