import { useRouter } from "next/router"
import { useEffect } from "react";

export default function AboutUs () {
const router = useRouter();

   useEffect(() => {
    router.push('contact us');
   },[])
    return (
    <>
    <h1>Your Verification ID is {router.query.id}</h1>
    </>
)

}