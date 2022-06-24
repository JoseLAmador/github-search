import Link from "next/link";
import BaseLayout from "@/layouts/BaseLayout";
import { HOME_LINKS } from "@/utils/contants";
import type { ReactElement } from "react";

function Home(){
  return (
    <>
      <section className="px-4 xl:px-0 bg-primary-50">
        <div className="py-10 mx-auto max-w-screen-xl">
          <h1 className="text-3xl font-bold text-primary-500">
            Github search
          </h1>
          <p className="text-base text-primary-400">
            You can search for Github users or repositories
          </p>
        </div>
      </section>

      <section className="px-4 xl:px-0">
        <div className="py-10 mx-auto max-w-screen-xl">
          <h2 className="text-2xl font-bold text-primary-500 text-center mb-10">
            What are you looking for?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mx-auto">
            {
              HOME_LINKS?.map((item) => (
                <Link key={item?.label} href={item?.to}>
                  <a className="bg-white hover:bg-primary-50 hover:border-primary-500 border shadow-sm">
                    <div className="p-6 rounded">
                      <h3 className="text-lg font-medium text-center capitalize mb-2 text-primary-500">
                        {item?.label}
                      </h3>
                      <p className="text-sm text-primary-400">
                        {item?.description}
                      </p>
                    </div>
                  </a>
                </Link>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default Home;
