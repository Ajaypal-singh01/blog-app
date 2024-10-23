import Pricingsection from "@/components/Pricingsection";
import Testimonial from "@/components/Testimonial";

import { cn } from "@/lib/utils";



export default function Home() {
  return (
    <>
    <section className="header relative pt-16 items-center flex h-screen" style={{ maxHeight: "860px" }}>
      <div className="container mx-auto items-center flex flex-wrap">
        <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div className="pt-32 sm:pt-0">
            <h2 className={cn("font-semibold text-4xl", "text-blueGray-600 dark:text-white")}>
              Welcome to SinghBlog
            </h2>
            <p className={cn("mt-4 text-lg leading-relaxed", "text-blueGray-500 dark:text-gray-400")}>
              SinghBlog is a markdown blog website created using Next.js. Explore various topics and share your thoughts with the world.
            </p>
            <div className="mt-12">
              <a
                className={cn("get-started font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1", "bg-pink-500 active:bg-pink-600 text-white uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150")}
                href="/learning-lab/tailwind-starter-kit/documentation/download"
              >
                Get Started
              </a>
              <a
                href="https://github.com/creativetimofficial/tailwind-starter-kit"
                className={cn("github-star ml-1 font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1", "bg-blueGray-700 dark:bg-blueGray-600  uppercase text-sm shadow hover:shadow-lg")}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Star
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12"
        src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/ill_header_3.png"
        alt="Illustration"
        style={{ maxHeight: "860px" }}
      />
    </section>
    <Pricingsection/>
    <Testimonial/>
    
    </>
  );
}
