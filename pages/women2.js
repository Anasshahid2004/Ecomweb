import React from 'react'
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from 'next/image';

const women = () => {
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
      <div className="max-w-[68rem] mx-auto mt-20 px-10 overflow-hidden">
              <div className="flex flex-row gap-6 navsc:flex-row">
                  <div className="flex-[2] flex gap-6 navsc:gap-8">
                      <div className="flex gap-4">
                          <div className="w-24">
                              <img src="BOY1.png" />
                          </div>
                      </div>
                      <div className="w-full h-full">
                      <Image
                        src="/BOY1.png"
                        width="100"
                        height="100"
                        className=" w-full"
                      />
                      </div>
                  </div>
                  <div className="h-[70%] flex flex-col gap-10 mt-16 flex-1">
                      <div>
                          <p className="font-normal subsc:font-medium navsc:font-normal text-[1.625rem] subsc:text-[2rem] navsc:text-[1.625rem] leading-8 tracking-wide text-[#212121]">Flex Push Button Bomber</p>
                          <p class="font-bold text-xl subsc:text-3xl navsc:text-xl opacity-20">Jacket</p>
                      </div>
                      <div>
                          <p className="font-bold text-base navsc:text-[0.9rem] leading-5 tracking-wider text-[#212121] uppercase">Select Size</p>
                          <div className="flex gap-4 mt-5">
                              <button class="rounded-full hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-100">XS</button>
                              <button class="rounded-full hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-100">S</button>
                              <button class="rounded-full hover:bg-gray-200 duration-150 ease-in-out font-bold leading-4 tracking-wider text-base text-[#666] w-10 h-10 flex justify-center items-center bg-gray-100">M</button>
                          </div>
                      </div>
                      <div className="flex gap-8 items-center">
                          <p className="font-bold text-lg navsc:text-base leading-5 tracking-wider text-black">Quantity:</p>
                          <div className="flex gap-3 items-center">
                              <button class="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center">-</button>
                              <p>1</p>
                              <button class="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-md hover:shadow-lg text-3xl font-light flex items-center justify-center">-</button>
                          </div>
                      </div>
                      <div className="flex items-center gap-3">
                          <a className="text-xs prodsc:text-sm font-medium leading-4 bg-[#212121] text-[#fff] px-2 subsc:w-[50%] navsc:w-auto navsc:px-4 py-[0.65rem] flex gap-2 items-center justify-center" href="/addtocart">
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="text-xl prodsc:text-2xl font-bold" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                                  <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
                              </svg>
                              <span>Add to Cart</span>
                          </a>
                          <span className="font-bold text-2xl leading-7 text-[#212121] tracking-widest">$235.00</span>
                      </div>
                  </div>
              </div>
              <div className="navsc:px-10 mt-24 mb-24 subsc:mb-36 md:mb-56">
                <div className="relative border-b-2 border-[#c4c4c4]">
                    <p className="font-extrabold text-[4rem] subsc:text-[6rem] md:text-[7.5rem] leading-[151px] text-[#f2f3f7e1] opacity-0.09">Overview</p>
                    <p class="font-bold text-2xl leading-6 text-[#212121] mb-1 subsc:mb-8 sm:mb-12 absolute top-[45%]">Product Information</p>
                </div>
                <div className="flex mt-10">
                <p class="uppercase font-bold text-base text-[#666] leading-5 tracking-wider flex-1">Product Details</p>
                <p className="font-light text-base text-[#666] leading-[26px] text-justify tracking-wider flex-[2]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                </div>
                <div className="flex mt-10">
                <p class="uppercase font-bold text-base text-[#595959c2] leading-5 tracking-wider flex-1">Product Care</p>
                <div className="flex-[2]">
                    <ul className="ml-4">
                        <li className="list-disc font-medium text-[0.9rem] text-[#5e5e5e] leading-[26px] text-justify tracking-wider">Hand wash using cold water.</li>
                        <li className="list-disc font-medium text-[0.9rem] text-[#5e5e5e] leading-[26px] text-justify tracking-wider">Do not using bleach.</li>
                        <li className="list-disc font-medium text-[0.9rem] text-[#5e5e5e] leading-[26px] text-justify tracking-wider">Hang it to dry.</li>
                        <li className="list-disc font-medium text-[0.9rem] text-[#5e5e5e] leading-[26px] text-justify tracking-wider">Iron on low temperature.</li>
                    </ul>
                </div>
                </div>
              </div>
          </div>
      <Footer />
    </>
  )
}

export default women
