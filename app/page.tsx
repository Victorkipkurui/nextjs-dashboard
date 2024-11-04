import Link from "next/link";
import { lusiana } from "./ui/fonts";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-12 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal ${lusiana}`}>
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-500">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <FaArrowRight/>
          </Link>
        </div>
      <Image
        src="/hero-desktop.png"
        width={600}
        height={400}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        <Image
        src="/hero-mobile.png"
        width={260}
        height={300}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    </main>
 
    </>
  );
}
