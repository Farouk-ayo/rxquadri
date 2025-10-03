import { motion } from "framer-motion";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <section className="flex w-full h-screen justify-center items-center">
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onAnimationComplete={finishLoading}
        >
          <h1 className="text-2xl sm:text-3xl font-semibold lg:text-4xl text-custom-gradient font-sora">
            RxQu@dri
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

export default SplashScreen;
