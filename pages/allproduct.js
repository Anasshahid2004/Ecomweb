import Head from "next/head";
import React from 'react'
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Link from "next/link";

const Allproduct = () => {
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
    <div class="bg-white md:ml-40 md:mr-40">
  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
    <h2 class="sr-only">Products</h2>

    <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <Link href="/product1" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src="/pink.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Pink Fleece Sweatpants</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Pants</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$195</p>
      </Link>
      <Link href="/product2" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src="/korean.png"></img>
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Cameryn Sash Tie Dress</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Dress</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$545</p>
      </Link>
      <Link href="/product3" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src="tank.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Muscle Tank</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">T Shirt</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$80</p>
      </Link>
      <Link href="/product4" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src="sweater3.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Imperial Alpaca Hoodie</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Jacket</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$699</p>
      </Link>
      <Link href="/product5" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="pant1.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Lite Sweatpants</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Pants</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$180</p>
      </Link>
      <Link href="/product6" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="pant2.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Flex Sweatpants</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Pants</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$180</p>
      </Link>
      <Link href="/product7" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="sweater1.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Brushed Raglan Sweatshirt</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Sweater</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$200</p>
      </Link>
      <Link href="/product8" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="sweater2.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Flex Sweatpants</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Sweater</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$699</p>
      </Link>
      <Link href="/product9" class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src="jacket2.png"></img> 
        </div>
        <h3 class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.05rem] mt-3">Brushed Bomber</h3>
        <p class="font-semibold leading-4 tracking-wide text-[#888] text-base mt-2">Jacket</p>
        <p class="font-semibold leading-6 tracking-wide text-[#212121] text-[1.25rem] mt-3">$325</p>
      </Link>

  
    </div>
  </div>
</div>

    <Footer />
    </>
  )
}

export default Allproduct
