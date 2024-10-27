"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { cn } from "@/lib/utils";

export default function About() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["community", "innovation", "creativity", "learning"],
      typeSpeed: 40,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="about-page relative pt-16 items-center flex h-screen" style={{ maxHeight: "860px" }}>
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className={cn("font-semibold text-4xl", "text-purple-700 dark:text-purple-300")}>
              About SinghBlog
            </h2>
            <p className={cn("mt-4 text-2xl leading-relaxed", "text-gray-600 dark:text-gray-300")}>
              Welcome to SinghBlog, a platform dedicated to sharing insights and knowledge. We believe in the power of community and the importance of voices being heard.
            </p>
            <p className={cn("mt-4 text-2xl leading-relaxed", "text-gray-600 dark:text-gray-300")}>
              Our mission is to create a vibrant space for writers and readers alike, where everyone can engage with thought-provoking content and inspire one another.
            </p>
            <p className="mt-4 text-2xl leading-relaxed text-gray-600 dark:text-gray-300 flex items-center">
              Join us in our journey to explore a world of{" "}
              <span className="font-bold ml-1" ref={typedElement}></span>.
            </p>
            <p className={cn("mt-4 text-lg leading-relaxed", "text-gray-600 dark:text-gray-300")}>
              Whether you're an aspiring writer or an enthusiastic reader, there’s a place for you here. We offer a range of articles, tips, and resources to help you grow and learn.
            </p>
            <div className="mt-12">
              <a
                className={cn("get-started font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1", "bg-purple-600 active:bg-purple-700 text-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150")}
                href="/get-started"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className={cn(
                  "contact-us ml-1 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1",
                  "bg-gray-800 dark:bg-gray-600 text-white dark:text-gray-200 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                )}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 right-0 pt-16 sm:w-4/12 -mt-48 sm:mt-0 w-8/12"
        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/ill_header_3.png"
        alt="Illustration"
        style={{ maxHeight: "600px", width: "auto" }} // Adjust maxHeight as needed
      />
    </section>
  );
}
