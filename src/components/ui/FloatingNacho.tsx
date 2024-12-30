import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FloatingNacho() {
  return (
    <motion.div
      className="absolute left-0 -top-[250px] z-20 w-[400px] transform md:-top-[300px] md:w-[675px]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ rotate: -2, transition: { duration: 0.2 } }}
    >
      <Image
        src="/img/nacho-cool.webp"
        alt="Nacho the Kat"
        width={675}
        height={553}
        className="w-full"
        priority
      />
    </motion.div>
  );
} 