import Image from "next/image";
import SectionHeader from "../components/sectionHeader";

const AboutSection = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 sm:px-8 lg:px-16 py-8 sm:py-28 mt-28">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="1" title="About Me" align="left" />

        <div className="grid lg:grid-cols-[2fr_1fr] gap-5 lg:gap-5 items-center">
          <div className="space-y-6 order-2 lg:order-1 font-light text-white/75">
            <p className=" text-base sm:text-[20px] leading-relaxed">
              Hello! I&apos;m Quadri , a UI/UX Designer, an Affiliate
              Pharmacist, and Youth Advocate for the UN Sustainable Development
              Goals (SDGs). I am passionate about solving problems at the
              intersection of healthcare, technology, and sustainability.
            </p>

            <p className=" text-base sm:text-[20px] leading-relaxed">
              With experience in pharmaceutical innovation and digital product
              design, I specialize in creating user-friendly, impactful
              solutions for medtech, agritech, edutech, fintech, and Web3
              platforms. I&apos;ve had the privilege of winning multiple awards
              for my contributions to climate action and sustainable
              development, reflecting my commitment to driving change through
              technology and advocacy.
            </p>

            <p className=" text-base sm:text-[20px] leading-relaxed">
              As Co-founder of{" "}
              <span className="text-custom-red font-normal">PharmaBin</span>, I
              lead initiatives addressing pharmaceutical waste management
              through digital solutions which also introduces the recycling of
              empty blister packs. With expertise in Figma, Adobe XD, Web3
              design, and front-end fundamentals, I am open to collaborations in
              healthtech, sustainability, and UI/UX design projects.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 relative px-10">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-64 h-80 sm:w-72 sm:h-96 lg:w-[22rem] lg:h-[23rem] right-[5.5%] top-[10%]">
                <div className="w-full h-full border-custom-gradient rounded-[10px]"></div>
              </div>
            </div>

            <div className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-96 z-20">
              <div className="w-full h-full rounded-[10px] overflow-hidden">
                <Image
                  src="/profile-image.png"
                  alt="Quadri - UI/UX Designer"
                  fill
                  className="object-cover object-center rounded-[10px]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
