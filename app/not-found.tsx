import Link from "next/link";
import { Button } from "./ui/button";

export default function notFound () {
  return(
    <>
    <h1 className="text-3xl font-bold items-center p-20">
       Page not found
    </h1>
    <div className="items-center p-20">
    <Link href='/'>
      <Button className="bg-blue-600 text-white hover:bg-blue-900">Back to HomePage</Button>
    </Link>
    </div>
    </>
  
  )
}