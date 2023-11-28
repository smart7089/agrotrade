import Head from "next/head";
import Image from "next/image";
import { TextField } from "@mui/material";

export default function signup() {
    return (
        <>
            <Head>
                <title>signup | AgroTrade</title>
            </Head>
            <main className="h-screen flex justify-center items-center py-20">
                <div className="w-full md:w-[420px] flex flex-col gap-3 border border-gray-300 rounded-md p-3">
                    <Image className="round-t-md" width={400}
                    height={200} src='/farm-trade.jpg' alt="farm trade" />

                </div>
                
                <div className="flex flex-col gap-3">
                <ul className="grid grid-cols-2">
                    <li className="text-center">Farmer</li>
                    <li className="text-center">Buyer</li>
                </ul>
                </div>

                <div>
                    <h2 className="text-2xl">Register as a buyer acount</h2>
                    <p className="text-xs text-grenn-600">Filling the form below to create a buyer's account</p>
                </div>

                <form>
                    <div className="mb-2">
                        <TextField className="w-full" variant="outlined" label="first name" />
                    </div>

                    <div className="mb-2">
                        <TextField className="w-full" variant="outlined" label="last name" />
                    </div>

                    <div className="mb-2">
                        <TextField className="w-full" type="email" variant="outlined" label="email" />
                    </div>

                   
                    <button className="h-[48px] w-full flex justify-center items-center bg-green-700 text-white text-x1 rounded-md">Register</button>
                </form>
            </main>
        </>
    )
}