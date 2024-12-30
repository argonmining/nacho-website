import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FloatingNacho() {
  return (
    <motion.div
      className="absolute left-0 -top-[180px] w-[250px] -rotate-180 transform md:-top-[265px] md:w-[350px]"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
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