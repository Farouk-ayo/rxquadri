import {
  Dribbble,
  Github,
  Linkedin,
  MessageCircle,
  Twitter,
} from "lucide-react";
import Link from "next/link";

export const socialLinks = [
  { icon: <Linkedin size={18} />, href: "#linkedin", label: "LinkedIn" },
  { icon: <Github size={18} />, href: "#github", label: "GitHub" },
  { icon: <Dribbble size={18} />, href: "#dribbble", label: "Dribbble" },
  { icon: <Twitter size={18} />, href: "#twitter", label: "Twitter" },
  { icon: <MessageCircle size={18} />, href: "#whatsapp", label: "WhatsApp" },
];

const SocialLinks: React.FC = () => {
  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 hidden xl:block">
      <div className="flex flex-col gap-4">
        {socialLinks.map((social, index) => (
          <Link
            key={index}
            href={social.href}
            aria-label={social.label}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800/50 border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400 hover:bg-gray-800 transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
          >
            {social.icon}
          </Link>
        ))}
      </div>

      {/* Vertical Email */}
      <div className="mt-8 transform rotate-90 origin-left translate-y-20">
        <a
          href="mailto:quadri@pharmabin.com"
          className="text-gray-400 hover:text-orange-400 transition-colors text-sm tracking-wider whitespace-nowrap"
        >
          quadri@pharmabin.com
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
