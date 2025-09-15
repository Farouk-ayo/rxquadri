import Image from "next/image";

const About: React.FC = () => {
  return (
    <section
      className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-24"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* About Me Title with Timeline */}
        <div className="lg:col-span-3 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              <span className="text-orange-400">About</span>{" "}
              <span className="block lg:inline">Me</span>
            </h2>
            <div className="hidden lg:flex flex-1 items-center space-x-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <div className="flex-1 h-px bg-gray-800"></div>
            </div>
          </div>

          {/* Timeline Number */}
          <div className="mt-6 lg:mt-8 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
            <span className="text-lg lg:text-2xl font-bold text-white">1</span>
          </div>
        </div>

        {/* About Content */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-4 text-sm sm:text-base">
            <p className="text-gray-300 leading-relaxed">
              Hello! I`&lsquo;`m Quadri, a UI/UX Designer, an Affiliate
              Pharmacist, and Youth Advocate for the UN Sustainable Development
              Goals (SDGs). I am passionate about solving problems at the
              intersection of healthcare, technology, and sustainability.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With experience in pharmaceutical innovation and digital product
              design, I specialize in creating user-friendly, impactful
              solutions for medtech, agritech, edutech, fintech, and Web3
              platforms. I`&lsquo;`ve had the privilege of winning multiple
              awards for my contributions to climate action and sustainable
              development, reflecting my commitment to driving change through
              technology and advocacy.
            </p>

            <p className="text-gray-300 leading-relaxed">
              As Co-founder of{" "}
              <span className="text-orange-400 font-semibold">PharmaBin</span>,
              I lead initiatives addressing pharmaceutical waste management
              through digital solutions which also introduces the recycling of
              empty blister packs, with expertise in Figma, Adobe XD, web
              design, and front-end fundamentals. I am open to collaborations in
              healthtech, sustainability, and UI/UX design projects.
            </p>
          </div>
        </div>

        {/* Profile Image */}
        <div className="lg:col-span-3">
          <div className="w-full max-w-xs sm:max-w-sm mx-auto">
            <div className="aspect-[4/5] relative">
              <Image
                src="/api/placeholder/300/350"
                alt="Durosinmi Quadri Profile"
                height={500}
                width={500}
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
