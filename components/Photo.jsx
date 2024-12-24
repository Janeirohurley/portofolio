"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
    return <div className="w-full h-full relative">

        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                transition: { delay: 2, duration: 0.4, ease: "easeIn" },
            }}>
            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
                }}
                className="h-[298px] w-[298px] xl:w-[458px] xl:h-[458px] mix-blend-luminosity absolute top-0 right-0">
                <Image src="/assets/profile.png" priority quality={100} fill alt="profile" className="object-contain" />
            </motion.div>

            <motion.svg className="w-[300px] xl:w-[490px] h-[300px] xl:h-[490px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
            >
                <motion.circle
                    cx="255"
                    cy="314"
                    r="250"
                    stroke="#00ff99"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                    strokeDasharray: ["15 120 25 25 ", "16 25 92 72", "4 250 22 22"],
                    rotate: [120, 320],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                />

            </motion.svg>

        </motion.div>
    </div>
}
export default Photo;