"use client";

import { motion } from "framer-motion";
import { APP_STORE_URL } from "@/lib/constants";

export default function EmailCapture() {
  return (
    <section id="cta" className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-xl text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Meal Planning That Starts With What You Have
        </h2>
        <p className="text-pw-text-subtle mb-8">
          PrepWise is live on the App Store. Download it free and start cooking
          smarter today.
        </p>

        <div className="flex justify-center">
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
            aria-label="Download PrepWise on the App Store"
          >
            <img
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              className="h-14 transition-transform group-hover:scale-105"
            />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
