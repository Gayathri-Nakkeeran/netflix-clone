"use client";

// Plus Icon Motion div React player

import { signIn } from "next-auth/react";
import { motion } from "framer-motion";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
// import {ChevronDownIcon} from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { SetStateAction, useState } from "react";
import Image from "next/image";
import Footer from "../footer";
import logo from "../../../public/Netflix_2015_logo.svg";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const questions = [
  {
    ques: "What is Netflix?",
    ans: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!`,
  },
  {
    ques: "How much does Netflix cost",
    ans: `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.`,
  },
  {
    ques: "What can I watch on Netflix?",
    ans: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

    You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  },
  {
    ques: "How do I cancel?",
    ans: `Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  },
  {
    ques: "What can I watch on Netflix?",
    ans: `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  },
  {
    ques: "Is Netflix good for kids?",
    ans: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
  },
];

function UnauthBanner({ router }: any) {
  return (
    <div className="h-[65vh] sm:h-[90vh] lg:h-[100vh] bg-cover bg-no-repeat bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/84526d58-475e-4e6f-9c81-d2d78ddce803/e3b08071-f218-4dab-99a2-80315f0922cd/LK-en-20221228-popsignuptwoweeks-perspective_alpha_website_small.jpg')] border-b-8 border-gray-800  ">
      <div
        className="bg-black bg-opacity-70 h-[100vh]
    "
      >
        <div className="flex items-center justify-between">
          <Image
            src={logo}
            alt="netflix"
            width={40}
            height={40}
            className="w-28 sm:w-36  ml-4 sm:ml-8 pt-4"
            onClick={() => router.push("/")}
          />
          <div className="flex mr-4 sm:mr-10 items-center">
            <div className="flex md:w-32 py-1 px-4  border rounded-md border-1 border-gray-400 items-center my-4">
              <div
                role="img"
                aria-hidden="true"
                className="default-ltr-cache-iyxs8w e1vkmu654 mr-2 inline-block"
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="default-ltr-cache-4z3qvp e1svuwfo1"
                  data-name="Languages"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
              <div className="customSelect hidden md:block">
                <select className="bg-transparent text-white text-sm focus:outline-none ">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
              </div>
              <div>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="default-ltr-cache-4z3qvp e1svuwfo1 inline-block"
                  data-name="CaretDown"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.5976 6.5C11.7461 6.5 11.8204 6.67956 11.7154 6.78457L8.23574 10.2643C8.10555 10.3945 7.89445 10.3945 7.76425 10.2643L4.28457 6.78457C4.17956 6.67956 4.25393 6.5 4.40244 6.5H11.5976Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </div>

            <button
              onClick={() => signIn()}
              className="h-8 px-1 sm:px-4 m-2 text-white bg-[#e50914] rounded"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="h-[55vh] sm:h-[80vh] w-[100%]  flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-2xl lg:leading-relaxed tracking-wider sm:text-4xl lg:text-5xl xl:text-6xl px-16 font-extrabold">
            The biggest Indian hits. Ready to watch here from ₹ 149.
          </h1>
          <h2 className="text-lg sm:text-1xl lg:text-2xl font-medium m-2 sm:m-4">
            Join today. Cancel anytime.
          </h2>

          <h2 className="text-md  lg:text-xl font-medium m-2 sm:m-4">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h2>
          <div className="flex  justify-center">
            <button
              onClick={() => signIn()}
              className="bg-red-600 hover:bg-[#e50914] p-4 rounded"
            >
              Sign In to Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnauthPage() {
  const router = useRouter();
  const [showCurrentAns, setShowCurrentAns] = useState<number | null>();

  return (
    <div>
      <main>
        <div className="bg-[#000000]">
          <UnauthBanner router={router} />
          <div className="border-b-8 border-gray-800 pb-8">
            <div className="flex flex-col h-[85vh] lg:h-[95vh] text-white px-8 sm:px-14 mt-3 sm:mt-14">
              <h1 className="mb-5 text-xl sm:text-3xl md:text-4xl lg:text-5xl text-bold text-center px-14 md:px-0">
                Frequently asked questions
              </h1>
              {questions.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <div
                    onClick={() =>
                      setShowCurrentAns(showCurrentAns === index ? null : index)
                    }
                    className="flex justify-between p-3 lg:p-5 mt-2 bg-[#303030] cursor-pointer hover:bg-neutral-700"
                  >
                    <h2>{item.ques}</h2>

                    {showCurrentAns === index ? (
                      <XMarkIcon className="h-7 w-7" color="white" />
                    ) : (
                      <PlusIcon className="h-7 w-7" color="white" />
                    )}
                  </div>
                  {showCurrentAns === index && (
                    <div className="p-3 lg:p-5 -mt-2  bg-[#303030] cursor-pointer">
                      {item.ans}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
