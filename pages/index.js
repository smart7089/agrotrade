import Head from "next/head";
import { JobOpening } from "@/components/JobOpening";
import { infoBox } from "@/components/infoBox";

export default function index() {
  return (
    <>
      <Head>
        <title>Agro Trade</title>
      </Head>
      <main>
        <infoBox>
          <ul>
            <li>watermelo</li>
            <li>orange</li>
            <li>gauva</li>
          </ul>
        </infoBox>

        <JobOpening title='Next JS Hybrid Work'Location='Nairobi'/>
        <JobOpening title='React Developer'Location='Eungu'/>
      </main>
    </>
  )
}