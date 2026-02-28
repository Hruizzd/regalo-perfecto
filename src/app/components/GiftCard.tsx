import { ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { GiftIdea } from '../data/gifts';

interface GiftCardProps {
  gift: GiftIdea;
  index: number;
}

export function GiftCard({ gift, index }: GiftCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={gift.image}
          alt={gift.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-purple-700">
          {gift.priceRange}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-2">{gift.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{gift.description}</p>
        <a
          href={gift.link}
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded px-1"
        >
          Ver ejemplo
          <ExternalLink className="size-4" />
        </a>
      </div>
    </motion.div>
  );
}
