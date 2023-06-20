"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const [open, close] = useState(false);
  function openfun() {
    close(!open);
  }
  return (
    <div className="flex gap-x-[60vw] justify-center lg:mt-10 mt-5 mb-5 h-7">
      <div className="-mt-[3%] scale-[100%] lg:scale-[40%]">
        <Link href='/'>
        <img src="laptop-.gif" alt="img"/>
        </Link>
      </div>
      <div onClick={openfun} className="lg:hidden block">
        <img src="menu-white.png" alt="" className="scale-[60%]"/>
      </div>
      <motion.div
        className={`flex justify-center items-center absolute h-[50%] bg-[rgb(9,158,158)]  w-[80%] lg:hidden
      ${open ? "block" : "hidden"}`}

        initial={{
            y:50,
            opacity:0.3,

        }}
        whileInView={{
            y:1,
            opacity:1,

        }}
      >
        
        <div className=" flex gap-10 flex-col justify-center items-center">
        <div className=" flex w-[16rem] justify-end " onClick={openfun}>
          x
        </div>
          <div className="hover:border-b-2 border-[rgb(9,158,158)]" onClick={openfun}>
            <Link href="/">Home</Link>
          </div>

          <div className="hover:border-b-2 border-[rgb(9,158,158)]"onClick={openfun}>
            <Link href="/about">About</Link>
          </div>

          <div className="hover:border-b-2 border-[rgb(9,158,158)]"onClick={openfun}>
            <Link href="/contact">contact</Link>
          </div>
          <div className="hover:border-b-2 border-[rgb(9,158,158)]"onClick={openfun}>
            <Link href="/movie">movie</Link>
          </div>
        </div>
      </motion.div>
      <div className="lg:block hidden">
        <div className=" flex gap-10">
          <div className="hover:border-b-2 border-[rgb(9,158,158)]">
            <Link href="/">Home</Link>
          </div>

          <div className="hover:border-b-2 border-[rgb(9,158,158)]">
            <Link href="/about">About</Link>
          </div>

          <div className="hover:border-b-2 border-[rgb(9,158,158)]">
            <Link href="/contact">contact</Link>
          </div>
          <div className="hover:border-b-2 border-[rgb(9,158,158)]">
            <Link href="/movie">movie</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
