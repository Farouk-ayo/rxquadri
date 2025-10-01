"use client";
import React from "react";
import {
  BehanceIcon,
  DribbleIcon,
  EmailIcon,
  LinkedInIcon,
  WhatsappIcon,
  XIcon,
} from "@/components/icons";
import Link from "next/link";
import Image from "next/image";

export const socialLinks = [
  {
    icon: <LinkedInIcon />,
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
  },
  {
    icon: <DribbleIcon />,
    href: "https://dribbble.com/yourprofile",
    label: "Dribbble",
  },
  {
    icon: <BehanceIcon />,
    href: "https://behance.net/yourprofile",
    label: "Behance",
  },
  { icon: <XIcon />, href: "https://x.com/yourprofile", label: "Twitter" },
  {
    icon: <WhatsappIcon />,
    href: "https://wa.me/yourphonenumber",
    label: "WhatsApp",
  },
  {
    icon: <EmailIcon />,
    href: "mailto:durosinmiquadril@gmail.com",
    label: "Email",
  },
];

export const MobileSocialLinks: React.FC = () => {
  return (
    <div className="lg:hidden flex justify-center mt-3">
      <div className="flex items-center gap-6">
        <div className="flex gap-1 md:gap-4">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8 w-8 md:w-12 md:h-12 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 group md:border border-white/20 rounded-full backdrop-blur-sm"
              aria-label={social.label}
            >
              <div className="group-hover:text-custom-gradient transition-colors duration-300">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const SocialLinks: React.FC = () => {
  return (
    <>
      {/* Left Side - Social Icons */}
      <div className="fixed left-[1%] bottom-15 transform z-50 hidden lg:flex flex-col items-center gap-4">
        <div className="flex flex-col gap-1">
          {socialLinks.map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 hover:scale-110 group"
              aria-label={social.label}
            >
              <div className="group-hover:text-custom-gradient transition-colors duration-300">
                {social.icon}
              </div>
            </Link>
          ))}
        </div>

        <div className="relative">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={0}
            height={0}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* Right Side - Email Contact */}
      <div className="fixed right-[1%] bottom-15 transform z-50 hidden lg:flex flex-col items-center gap-6">
        <Link
          href="mailto:durosinmiquadril@gmail.com"
          className="text-white/70 hover:text-white transition-all duration-300 hover:scale-110 group"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="text-sm font-light tracking-wider group-hover:text-custom-gradient transition-colors duration-300">
            durosinmiquadril@gmail.com
          </span>
        </Link>
        <div className="relative">
          <Image
            src="/arrow.svg"
            alt="arrow"
            width={0}
            height={0}
            className="w-auto h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default SocialLinks;
