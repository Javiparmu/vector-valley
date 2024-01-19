import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import ElipseIcons from "@/components/elipse-icons";
import SvgTitle from "@/components/svg-title";
import BlurredBg from "@/components/blurred-bg";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 items-center justify-between mt-5">
      <MaxWidthWrapper className="flex flex-col items-center h-full">
        <SvgTitle />
        <h1 className="title text-center text-gray-900 dark:text-white text-8xl font-semibold mt-4">
          The
          <span className="mx-5 bg-gradient-to-tr from-red-500 dark:from-indigo-500 to-indigo-500 dark:to-red-500 inline-block text-transparent bg-clip-text">best</span> 
          svg resource on the
          <span className="ml-5 bg-gradient-to-tr from-red-500 dark:from-indigo-500 to-indigo-500 dark:to-red-500 inline-block text-transparent bg-clip-text">web.</span>
        </h1>
        <ElipseIcons />
        <BlurredBg />
        <div className="flex gap-4 mt-40">
          <Link href='/svgate' className='flex w-48 text-white bg-red-500 py-4 px-6 rounded-lg items-center justify-between hover:bg-red-600 transition'>
            Explore our AI
            <ChevronRight />
          </Link>
          <Link href='/svgate' className='flex w-44 text-white bg-indigo-500 py-4 px-6 rounded-lg items-center justify-between hover:bg-indigo-600 transition'>
            Get Started
            <ChevronRight />
          </Link>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
