import Layout from "@/components/Layout";
import { LinkArrow } from "@/components/Icons";
import Head from "next/head";
import Link from "next/link";
import WorkExperience from "@/components/WorkExperience";
import ProjectExperience from "@/components/ProjectExperience";

export default function Experience() {
  return (
    <>
      <Head>
        <title> Experience | Michael Blanchette</title>
        <meta
          name="description"
          content="Learn more about Michael Blanchette's work and project experiences."
        />
      </Head>
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <div className="flex w-full flex-col items-center self-center lg:w-full lg:text-center">
            <p className="my-4 text-center font-medium md:text-sm sm:!text-xs">
              Feel free to download the PDF version of my resume below.
            </p>
            <div className="my-2 flex items-right lg:self-center">
              <Link
                href="/Michael_Blanchette_CV.pdf"
                target={"_blank"}
                className={`flex items-center rounded-lg border-2 border-solid p-2.5 px-6 text-lg font-semibold
      capitalize hover:border-dark hover:text-dark 
      md:p-2 md:px-4 md:text-base
      bg-gradient-to-r from-blue-700 to-cyan-300 text-white`}
                download
              >
                Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
              </Link>
            </div>
          </div>

          <WorkExperience />
          <ProjectExperience />
        </Layout>
      </main>
    </>
  );
}
