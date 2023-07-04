import Image from "next/image";
import Container from "./container";
import heroImg from "../public/img/hero.png";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap ">
        <main className="max-w-[68rem] mx-auto px-10 overflow hidden">
          <div className="flex items-center gap-16 mt-10">
            
          </div>
        </main>
      <div class="container p-8 mx-auto xl:px-0 flex flex-wrap "></div>
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
          <span className="bg-[#e1edff] rounded-md text-[#0000FF] font-semibold px-5 py-2 md:ml-40">Sale 70%</span>
          <h1 class="font-bold text-[3rem] sm:text-[4rem] tracking-wide text-[#212121] leading-[55px] my-10 md:ml-40  mt-6">An Industrial Take on Streetwear</h1>
          <p className="font-normal mx-2 my-8 md:ml-40 text-3xl text-black-500 text-gray-400 ">
              Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p> 
            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href=""
                target="_parent"
                rel="noopener"
                className="px-8 py-4 md:ml-40 text-lg font-semibold flex gap-4 leading-2 justify-center items-center text-center text-white bg-gray-800 rounded-sm ">
                Start Shopping
              </Link>
              
                </div>
              
                <div className="sm:flex sm:justify-center md:ml-20 py-6 sm:items-center grid grid-cols-[50%_50%] justify-center gap-2">
                <img src="/brand1.png" ></img>
                <img src="/brand2.png" ></img>
                <img src="/brand3.png" ></img>
                <img src="/brand4.png" ></img>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="400"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
              
            />
          </div>
        </div>
      </Container>
      
    </>
  );
}

export default Hero;