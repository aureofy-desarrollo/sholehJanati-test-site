import { motion } from "motion/react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "figma:asset/990f8bdc6b57a5d28c98c2edb96ac7ce3647b896.png";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

        {/* Hero Image */}
        <div className="relative max-w-sm mx-auto lg:mx-0">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl shadow-purple-900/20"
          >
            <img
              src={heroImage}
              alt="Sholeh Janati in Studio"
              className="w-full h-full object-cover object-bottom"
            />

            {/* Grain Overlay */}
            <div className="absolute inset-0 bg-slate-900/10 mix-blend-overlay"></div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-8 -right-8 z-0 w-48 h-48 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            style={{ backgroundColor: 'var(--brand-lighter)' }}
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-8 -left-8 z-0 w-48 h-48 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            style={{ backgroundColor: '#FFB3D9' }}
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="h-px w-12" style={{ backgroundColor: 'var(--brand-lighter)' }}></span>
              <span className="font-medium tracking-wide text-sm uppercase" style={{ color: 'var(--brand)' }}>Artist & Visionary</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-serif text-slate-900 leading-[1.1] mb-4">
              I am{" "}
              <span className="italic relative inline-block text-black">
                Sholeh.
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1, duration: 1.5, ease: "easeInOut" }}
                  className="absolute -bottom-1 left-0 w-full h-2 pointer-events-none text-black"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                </motion.svg>
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="prose prose-lg text-slate-500 font-light leading-relaxed max-w-md border-l-2 pl-6"
            style={{ borderColor: 'var(--brand-lightest)' }}
          >
            <p>
              I am a Persian-American artist whose abstractions of landscapes, waterscapes, and figuratives are exhibited in galleries and owned by corporations, institutions, celebrities, athletes, and private collectors around the world. I live and work in beautiful Westport, Connecticut.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="mailto:sholeh@sholehjanati.com" // Placeholder email, can be updated
              className="inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white font-medium rounded-full hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl"
            >
              CONTACT ME
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}