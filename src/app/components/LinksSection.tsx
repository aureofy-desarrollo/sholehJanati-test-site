import { motion } from "motion/react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import artworkImage from "@/assets/Own One of My Artworks.jpg";
import artwearImage from "@/assets/Wear SholehArtwear.png";
import luxuryHomeImage from "@/assets/Buy - Sell a Luxury Home.jpg";
import tedxImage from "@/assets/TEDx Westport.png";

export function LinksSection() {
  const links = [
    {
      title: "Own One of My Artworks",
      category: "Original Art",
      url: "https://SholehArt.com",
      image: artworkImage,
    },
    {
      title: "Wear SholehArtwear",
      category: "Fashion",
      url: "https://sholehart.printful.me/",
      image: artwearImage,
    },
    {
      title: "Buy / Sell a Luxury Home",
      category: "Real Estate",
      url: "https://www.forbesglobalproperties.com/agents/sholeh-janati",
      image: luxuryHomeImage,
    },
    {
      title: "TEDx Westport",
      category: "Community",
      url: "https://tedxwestport.com",
      image: tedxImage,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 border-t border-slate-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-4xl lg:text-5xl font-serif text-slate-900 mb-0">
            Things I Will Do For You
          </h2>
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={item}
            className="group block cursor-pointer"
          >
            {/* Card Image */}
            <div className="relative overflow-hidden rounded-[1.5rem] bg-slate-100 mb-6 aspect-[4/5] isolate">
              <ImageWithFallback
                src={link.image}
                alt={link.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 delay-100">
                  <ExternalLink className="w-5 h-5 text-slate-900" />
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="space-y-1">
              <p
                className="text-sm font-medium tracking-wider uppercase"
                style={{ color: 'var(--brand)' }}
              >
                {link.category}
              </p>
              <h3
                className="text-xl font-serif text-slate-900 transition-colors"
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--brand-dark)'}
                onMouseLeave={(e) => e.currentTarget.style.color = ''}
              >
                {link.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}