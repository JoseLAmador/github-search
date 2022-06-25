import BaseLayout from "@/layouts/BaseLayout";
import Link from "next/link";
import type { ReactElement } from "react";

function IndexPage(){
  return (
    <>
      <section className="px-4 xl:px-0 bg-primary-50">
        <div className="py-10 mx-auto max-w-screen-xl">
          <h1 className="text-3xl font-bold text-primary-500">
            Search repositories
          </h1>
          <p className="text-base text-primary-400">
            You can search for Github repositories
          </p>
        </div>
      </section>
      <section className="px-4 xl:px-0">
        <div className="py-10 mx-auto max-w-screen-xl">
          <h2 className="text-2xl font-bold text-primary-500 text-center mb-10">
            What are you looking for?
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mx-auto">
            <Link href="/search-user">
              <a className="bg-white hover:bg-primary-50 hover:border-primary-500 border shadow-sm">
                <div className="p-6 rounded">
                  <h3 className="text-lg font-medium text-center capitalize mb-2 text-primary-500">users</h3>
                  <p className="text-sm text-primary-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati reiciendis ullam,
                    ipsam a rem sunt facere impedit culpa est voluptates eos eligendi illum praesentium
                    voluptatibus amet. Obcaecati, autem quo.
                  </p>
                </div>
              </a>
            </Link>
            <Link href="/search-repo">
              <a className="bg-white hover:bg-primary-50 hover:border-primary-500 border shadow-sm">
                <div className="p-6 rounded">
                  <h3 className="text-lg font-medium text-center capitalize mb-2 text-primary-500">repositories</h3>
                  <p className="text-sm text-primary-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor obcaecati reiciendis ullam,
                    ipsam a rem sunt facere impedit culpa est voluptates eos eligendi illum praesentium
                    voluptatibus amet. Obcaecati, autem quo.
                  </p>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

IndexPage.getLayout = (page: ReactElement) => {
  return (
    <BaseLayout>
      {page}
    </BaseLayout>
  )
}

export default IndexPage;
