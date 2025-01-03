import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LucideX } from 'lucide-react';

const menuItems = [
    { title: 'CoinMarketCap', href: 'https://coinmarketcap.com/currencies/nacho-the-kat/' },
    { title: 'CoinGecko', href: 'https://www.coingecko.com/en/coins/nacho-the-kat' },
    { title: 'Nacho Kats NFTs', href: '#trade-nacho' },
    { title: 'Whitepaper', href: '/Nacho_the_kat_Whitepaper_240605.pdf' },
    { title: 'One Pager', href: '/documents/one-pager.pdf' }
];

export default function FloatingMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed right-16 top-16 z-50">
            {/* Desktop Menu */}
            <div className="hidden md:block">
                <div className="relative">
                    <motion.div
                        className="group cursor-pointer"
                        whileHover="hover"
                        initial="initial"
                        animate="initial"
                    >
                        <motion.div
                            variants={{
                                initial: { rotate: 0 },
                                hover: { rotate: 360 }
                            }}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="relative z-20"
                        >
                            <Image
                                src="/img/nacho.svg"
                                alt="Menu"
                                width={50}
                                height={50}
                            />
                        </motion.div>
                        <motion.div
                            className="absolute right-[calc(100%-20px)] top-1/2 -translate-y-1/2 origin-right z-10"
                            initial={{ width: 0, opacity: 0 }}
                            variants={{
                                hover: {
                                    width: 'auto',
                                    opacity: 1,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }
                                },
                                initial: {
                                    width: 0,
                                    opacity: 0,
                                    transition: {
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                        >
                            <div className="flex items-center gap-6 rounded-xl border-2 border-primary bg-background px-6 py-2 whitespace-nowrap overflow-hidden">
                                <motion.div
                                    className="flex items-center gap-6"
                                    variants={{
                                        hover: {
                                            opacity: 1,
                                            transition: {
                                                duration: 0.3,
                                                delay: 0.2
                                            }
                                        },
                                        initial: {
                                            opacity: 0,
                                            transition: {
                                                duration: 0.2
                                            }
                                        }
                                    }}
                                >
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            target={item.href.startsWith('/') ? '_blank' : undefined}
                                            className="text-lg hover:text-primary transition-colors"
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
                <motion.button
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <Image
                        src="/img/nacho.svg"
                        alt="Menu"
                        width={50}
                        height={50}
                    />
                </motion.button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="fixed inset-y-0 right-0 w-full max-w-sm border-l-2 border-primary bg-background p-6"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 20 }}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute right-4 top-4 text-gray-500 hover:text-primary"
                            >
                                <LucideX size={24} />
                            </button>
                            <div className="mt-12 flex flex-col gap-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        target={item.href.startsWith('/') ? '_blank' : undefined}
                                        className="text-xl hover:text-primary transition-colors"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
} 