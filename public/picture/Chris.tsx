"use client";
import { motion } from "motion/react"
import Image from "next/image"

export default function Chris() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
    >
      <Image src="/assets/screenshot.png" width={250} height={250} alt="Chris" className="rounded-full object-cover"/>
    </motion.div>
  )
}
