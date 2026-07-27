"use client";

import { motion } from "framer-motion";
import { FAQ_ITEMS } from "@content/faq";
import { featuredFaqs } from "@/lib/faq";

/**
 * A short answer block on the home page.
 *
 * It carries NO FAQPage JSON-LD. /faq owns the site's single FAQPage node, and
 * two pages publishing the same questions as schema is how Google ends up
 * picking one surface and discarding the other. The link below is what ties
 * this block to the page that does own it, and scripts/verify-seo.mjs requires
 * that link on any page rendering an FAQ section without the schema.
 *
 * The heading is a statement rather than the label "FAQ", per
 * references/voice.md.
 */
export default function HomeFaq() {
  const items = featuredFaqs(FAQ_ITEMS);

  return (
    <section id="questions" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-10"
        >
          What people ask before they download it
        </motion.h2>

        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.id}>
              <h3 className="text-lg font-semibold text-pw-text mb-2">
                {item.question}
              </h3>
              <p className="text-pw-text-subtle leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm">
          <a
            href="/faq"
            className="text-pw-link underline underline-offset-2 hover:text-pw-accent transition-colors"
          >
            Read the full PrepWise FAQ
          </a>
        </p>
      </div>
    </section>
  );
}
