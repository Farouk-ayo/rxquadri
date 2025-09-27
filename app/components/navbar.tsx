"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";
import { sections } from "@/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section
      className="fixed top-0 h-20 sm:h-24 flex flex-row items-center w-full shadow-sm justify-between px-2 sm:px-16 z-20 backdrop-blur-lg border-b border-white/20"
      data-aos="fade-down"
    >
      <Link
        href="/"
        className="flex justify-start gap-1 sm:gap-5 sm:justify-center items-center tracking-wider"
      >
        <div className="w-5 h-5 sm:w-9 sm:h-9 relative">
          <Image
            src={"/logo.png"}
            className=" w-full h-full"
            layout="fill"
            objectFit="
            cover"
            alt="logo"
          />
        </div>

        <h1 className="text-2xl sm:text-3xl font-semibold lg:text-4xl  text-custom-gradient font-sora">
          RxQu@dri
        </h1>
      </Link>
      <div className="hidden lg:flex items-center gap-6  font-sora ">
        <nav className="w-full flex flex-row items-center">
          <ul className="w-full flex flex-row justify-start items-center font-semibold text-lg gap-8">
            {sections.map((section, id) => (
              <Button
                variant={"link"}
                key={id}
                className="hidden lg:inline-block"
                asChild
              >
                <Link key={id} href={section.idRoute} className="">
                  {section.name}
                </Link>
              </Button>
            ))}
            <li className="hidden lg:inline-block">
              <Button variant={"outline"} size="lg">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  Resume
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="lg:hidden z-50">
        <button
          className={`hamburger ${
            isOpen ? "open" : ""
          } relative z-30 w-6 h-4 sm:w-8 sm:h-6 flex flex-col justify-between items-left`}
          onClick={toggleMenu}
        >
          <span className="line block w-full h-0.5 sm:h-1 dark:bg-secondary-color-3 bg-custom-gradient transition-transform duration-300 ease-in-out origin-center"></span>
          <span className="line block  w-full  h-0.5 sm:h-1  dark:bg-secondary-color-3 bg-custom-gradient transition-opacity duration-300 ease-in-out"></span>
          <span className="line block  w-full h-0.5 sm:h-1  dark:bg-secondary-color-3 bg-custom-gradient transition-transform duration-300 ease-in-out origin-center"></span>
        </button>
      </div>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 w-full h-lvh bg-black/40 bg-opacity-100 lg:hidden`}
      >
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? "0%" : "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute top-0 right-0 h-full w-3/4 shadow-lg p-4 bg-black"
        >
          <nav className="w-full flex flex-col items-center  z-40 mt-36 gap-4 justify-center">
            {sections.map((section, id) => (
              <Button variant={"link"} key={id} asChild>
                <Link
                  key={id}
                  href={section.idRoute}
                  className=" dark:text-primary-color"
                  onClick={toggleMenu}
                >
                  {section.name}
                </Link>
              </Button>
            ))}
            <Button variant={"outline"}>
              <Link
                href="https://docs.google.com/document/d/1EktAf1QQtH6vMP7XUi9i0LLCasbY9IPy7YLwGasTA7k/edit?usp=sharing"
                className=""
                target="_blank"
                rel="noopener noreferrer"
                onClick={toggleMenu}
              >
                Resume
              </Link>
            </Button>
          </nav>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Navbar;
