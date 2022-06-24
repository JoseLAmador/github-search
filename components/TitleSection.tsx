import type { ReactNode } from "react";

type TitleSection = {
  title: string;
  description: string;
  children?: ReactNode
}
export default function TitleSection(props: TitleSection){
  const {
    title = "",
    description = "",
    children,
  } = props;

  return (
    <section className="px-4 xl:px-0 bg-primary-50">
      <div className="py-10 mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-bold text-primary-500">
          {title}
        </h1>
        <p className="text-base text-primary-400 mb-4">
          {description}
        </p>
        {children}
      </div>
    </section>
  );
}