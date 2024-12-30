import { motion } from 'framer-motion';
import Image from 'next/image';

interface PeekingNachoProps {
  position: 'left' | 'right' | 'top';
  delay?: number;
}

export default function PeekingNacho({ position, delay = 0 }: PeekingNachoProps) {
  const positions = {
    left: 'left-0 top-1/2 -translate-x-1/2 -translate-y-1/2',
    right: 'right-0 top-1/2 translate-x-1/2 -translate-y-1/2',
    top: 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2'
  };

  const animations = {
    left: { x: [-100, -20], opacity: [0, 1] },
    right: { x: [100, 20], opacity: [0, 1] },
    top: { y: [-100, -20], opacity: [0, 1] }
  };

  return (
    <motion.div
      className={`absolute ${positions[position]} z-10 w-[100px] h-[100px]`}
      initial={{ opacity: 0 }}
      animate={animations[position]}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut'
      }}
      whileHover={{ scale: 1.1 }}
    >
      <Image
        src={`/img/illustrations/nacho-peek-${position}.svg`}
        alt={`Nacho peeking from ${position}`}
        width={100}
        height={100}
        className="w-full h-full"
      />
    </motion.div>
  );
} 