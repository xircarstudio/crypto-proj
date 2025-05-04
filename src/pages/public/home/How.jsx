import { motion } from "framer-motion";
import Button from "../../../components/common/buttons/Button";
import BoredApe from "../../../assets/home/boredape.jpg";

export default function How() {
  return (
    <div className="bg-white">
      <h2 className="home-header font-bold  text-center p-8 lg:p-12">
        How it works
      </h2>
      <div className="  flex flex-col md:flex-row items-center justify-center px-4 sm:px-7">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-md text-left space-y-6"
        >
          <div className="space-y-4">
            <div className="mb-4">
              <div className="font-semibold home-sub-header">
                1. Quick Registration & Setup
              </div>
              <p className=" home-text-sm">
                Sign up in under 2 minutes and add your Nigerian bank details
                just once.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold home-sub-header">
                2. Fund Your Wallet
              </h3>
              <p className=" home-text-sm">
                Send any supported cryptocurrency to your unique wallet address.
                Whether it’s Bitcoin, Ethereum, USDT, or dozens of other coins.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold home-sub-header">
                3. Receive Naira Automatically
              </h3>
              <p className=" home-text-sm">
                That’s it! Once your crypto transaction is confirmed on the
                blockchain, we immediately process the conversion and send naira
                directly to your registered bank account.
              </p>
            </div>
          </div>
          <div className=" flex justify-center md:justify-start items-center">
            <Button type="home" className="mt-4 ">
              Start Swapping Now
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="  h-full flex items-center justify-center mt-10 md:mt-0 md:ml-10"
        >
          <div className="w-full max-w-lg aspect-square  rounded-lg shadow-lg">
            <img
              src={BoredApe}
              alt="Bored Ape"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
