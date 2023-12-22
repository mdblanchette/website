import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <title> Contact | Michael Blanchette </title>
        <meta
          name="description"
          content="Contact Michael Blanchette for work."
        />
      </Head>
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Contact"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="flex w-full items-start justify-around md:flex-col">
            <div className="relative my-10 w-1/2 lg:mr-10 lg:inline-block lg:w-full md:inline-block md:w-full p-8 border-2 border-solid border-dark rounded-2xl bg-light dark:border-light dark:bg-dark">
              <div
                className="absolute top-0 -right-4 -z-10 h-[103%] w-[101%] rounded-[2rem]  bg-dark
        dark:bg-light shadow-2xl"
              />
              <h1 className="capitalize text-3xl font-bold my-2 mt-4 xs:text-lg">
                Contact Me!
              </h1>
              <h2 className="mb-2 font-bold text-2xl">
                Email:{" "}
                <a
                  href="mailto:mdblanchette@connect.ust.hk"
                  className="text-primary font-semibold dark:text-primaryDark"
                >
                  mdblanchette@connect.ust.hk
                </a>
              </h2>
              <h2 className="mb-2 font-bold text-2xl">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/michaelblanchette/"
                  target="_blank"
                  className="text-primary font-semibold dark:text-primaryDark"
                >
                  -michaelblanchette
                </a>
              </h2>
              <h2 className="mb-2 font-bold text-2xl">
                GitHub:{" "}
                <a
                  href="https://github.com/mdblanchette"
                  target="_blank"
                  className="text-primary font-semibold dark:text-primaryDark"
                >
                  mdblanchette
                </a>
              </h2>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default contact;
