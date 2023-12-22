import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/homepage-profile.jpg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Michael Blanchette</title>
        <meta
          name="description"
          content="Explore Michael Blanchette's CV, projects, and experiences as a full-stack developer."
        />
      </Head>
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-around md:flex-col">
            <div className="relative my-10 w-1/4 lg:mr-10 lg:inline-block lg:w-full md:inline-block md:w-full p-8 border-2 border-solid border-dark rounded-2xl bg-light dark:border-light dark:bg-dark">
              <div
                className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem]  bg-dark
        dark:bg-light shadow-2xl"
              />
              <Image
                src={profilePic}
                alt="Michael Blanchette"
                className="h-auto w-full rounded-2xl"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-left self-center lg:w-full lg:text-center">
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                Hey! My name is
              </p>
              <AnimatedText
                text="Michael Blanchette."
                className="!text-left !text-5xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                I'm a{" "}
                <a
                  href="https://techmgmt.hkust.edu.hk/"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dual Degree Program
                </a>{" "}
                student studying computer science and marketing in{" "}
                <a
                  href="https://www.ust.hk"
                  className="text-blue-500 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  HKUST
                </a>
                . This hub is where I showcase my projects, experiences, and
                anything else I think is fun :) Take a look around ! ✌️
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/Michael_Blanchette_CV.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid p-2.5 px-6 text-lg font-semibold
      capitalize hover:border-dark hover:text-dark 
      md:p-2 md:px-4 md:text-base
      bg-gradient-to-r from-blue-700 to-cyan-300 text-white`}
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="/contact"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact me!
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
