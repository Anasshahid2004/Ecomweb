import Head from "next/head";
import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const Kids = () => {
  return (
    <>
    <Head>
        <title>Dine Market</title>
        <meta
          name="description"
          content="Nextly is a free landing page template built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/no1.png" />
      </Head>
    <Navbar />
    <div className='mt-14 text-center font-medium leading-6 tracking-wide text-[#888] text-[1.05rem]'>No products to show</div>
    <Footer />
    </>
  )
}

export default Kids
