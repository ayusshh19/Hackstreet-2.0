import React, { useState } from "react";
import Button from "../components/Button";
import Logo from "../components/Logo";
const Homepage = () => {
  const [baseurl, setbaseurl] = useState("");
  return (
    <div className="bg-darkbg text-white">
      <div className="fixed z-30 w-full max-w-screen-md  shadow backdrop-blur-lg inset-x-0 top-0 mx-auto border border-gray-100 py-3 md:top-6 md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <a className=" flex items-center gap-1">
                <Logo />
                <div className="text-xl sm:text-2xl text-white font-bold pt-0.5">
                  UrGPT
                </div>
              </a>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5"></div>
            <div className="flex items-center justify-end sm:gap-3">
              <span className="cursor-pointer hidden sm:inline-block text-sm font-medium text-gray-900 transition-all duration-200 rounded-lg px-2 py-1 hover:bg-gray-100 hover:text-gray-900">
                How it works
              </span>
              <Button icon={false} label={"Sign in"} />
            </div>
          </div>
        </div>
      </div>
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-transparent to-transparent pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
        <div className="relative isolate z-10">
          <div className="absolute -z-10 flex -translate-y-1/2 justify-center overflow-hidden inset-x-0 top-1/2 [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg
              className="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
                  width="200"
                  height="200"
                  x="50%"
                  y="50%"
                  patternUnits="userSpaceOnUse"
                  patternTransform="translate(-100 0)"
                >
                  <path d="M.5 200V.5H200" fill="none"></path>
                </pattern>
              </defs>
              <svg x="50%" y="50%" className="overflow-visible fill-blue-50">
                <path
                  d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
                  strokeWidth="0"
                ></path>
              </svg>
              <rect
                width="100%"
                height="100%"
                strokeWidth="0"
                fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
              ></rect>
            </svg>
          </div>
        </div>
        <div className="relative z-20 my-10 max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900 ">
              Ur<span className="text-fillcomp">GPT</span> <br />
              for providing better user experiences
            </h1>
            <h2 className="text-lg leading-8 text-gray-600 mt-6">
              Empower your conversations with our UrGPT, adeptly trained on
              diverse datasets, ensuring swift and accurate responses to user
              queries for an enhanced interactive experience.
            </h2>

            <div class="m-6">
              <input
                type="text"
                id="default-input"
                class="[background:radial-gradient(300%_100%_at_50%_10%,#201F1F_40%,#22FF53_200%)] via-[#201F1F] to-[#201F1F] border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Base Url her"
                onChange={(e) => setbaseurl(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center gap-x-6 mt-10">
              <Button
                icon={true}
                buttonStyle="px-4 py-3"
                label={"Try Now"}
                baseurl={baseurl}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-darkbg py-10 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-3">
          <div className="max-w-2xl mx-auto lg:text-center">
            <p className="text-base font-semibold leading-7 text-fillcomp">
              Your Own AI Chatbot
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mt-2 sm:text-4xl">
              The Future of Conversational AI
            </h2>
            <p className="text-lg leading-8 text-gray-600 mt-6">
              Using a personalized AI GPT trained on your content <br /> is now
              as simple as pressing a uploading single file.
            </p>
          </div>
          <div className="max-w-2xl mx-auto mt-10 lg:max-w-none lg:pt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-fillcomp">
                  <svg
                    className="h-5 w-5 flex-none text-filcomp"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Upload your PDF
                </h3>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600 mt-4">
                  <h4 className="flex-auto">
                    Our automated system will seamlessly retrieve all pages from
                    your PDF and present them for your review effortlessly.{" "}
                  </h4>
                </dd>
              </div>
              <div className="flex flex-col">
                <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-fillcomp">
                  <svg
                    className="h-5 w-5 flex-none text-filcomp"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Effortless revision
                </h3>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600 mt-4">
                  <h4 className="flex-auto">
                    Revision of long topics difficult our chapgpt provides
                    solution for you.
                  </h4>
                </dd>
              </div>
              <div className="flex flex-col">
                <h3 className="flex items-center gap-x-3 text-base font-semibold leading-7 text-fillcomp">
                  <svg
                    className="h-5 w-5 flex-none text-filcomp"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  Your own chatbot
                </h3>
                <dd className="flex flex-auto flex-col text-base leading-7 text-gray-600 mt-4">
                  <h4 className="flex-auto">
                    Can handle type of response according to your own needs.
                  </h4>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <section className="bg-darkbg">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden bg-darkbg px-6 py-10 md:py-24 text-center sm:shadow-sm sm:rounded-3xl sm:border sm:border-gray-100 sm:px-16">
            <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-gray-900 mx-auto sm:text-4xl">
              Ready to elevate your Prompt Engineering&apos;s performance and
              impact
              <br /> to new heights?
            </h2>
            <h3 className="max-w-xl text-lg leading-8 text-gray-500 mx-auto mt-6">
              Unlock the potential of your PDF by harnessing the power of an
              AI-driven chatbot. Enhance user experience, engage visitors with
              personalized interactions, and achieve unprecedented levels of
              efficiency and customer satisfaction.
            </h3>
            <div className="flex items-center justify-center gap-x-6 mt-8">
              <Button icon={true} buttonStyle="px-4 py-3" label={"Try Now"} />
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute -z-10 h-[64rem] w-[64rem] -translate-x-1/2 left-1/2 top-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fillOpacity="0.7"
              ></circle>
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#22FF53"></stop>
                  <stop offset="1" stopColor="#22FF95"></stop>
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </section>
      <footer className="bg-darkbg py-12 sm:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <a className="isomorphic-link flex items-center justify-center gap-1">
            <Logo />
            <div className="text-2xl text-white font-bold">UrGPT</div>
            <p className="sr-only">SiteGPT</p>
          </a>

          <p className="text-xl leading-5 text-gray-500 mt-8 text-center">
            by Team Humaniods
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Homepage;
