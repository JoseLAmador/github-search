import { useState } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import TitleSection from "@/components/TitleSection";
import Input from "@/components/Input";
import type { ReactElement } from "react";

function IndexPage(){
  const [ search, setSearch ] = useState("");

  return (
    <TitleSection
      title="Search user"
      description="You can search for Github users">
        <div className="w-full lg:w-1/2 space-y-1">
          <Input
            type="search"
            placeholder="Search user..."
            value={search}
            onChange={(event) => setSearch(event?.target?.value)}
          />
          <p className="text-xs italic text-primary-200">
            Note: If you don't remember any Github user you should try with:
            <button type="button" className="pl-1 underline" onClick={() => setSearch("JoseLAmador")}>
              JoseLAmador
            </button>
          </p>
        </div>
    </TitleSection>
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
