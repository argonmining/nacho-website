import CrowdfundingProgress from '@/components/CrowdfundingProgress';
import { PartButton } from '@/components/ui/Buttons/PartButton';
import FloatingNacho from '@/components/ui/FloatingNacho';
import LetterPullup from '@/components/ui/letter-pullup';
import crowdfunding from '@/config/crowdfunding';
import { motion, useAnimate, useAnimationControls } from 'framer-motion';
import { LucideChartCandlestick, LucideCoins, LucideEarth, LucideUsers } from 'lucide-react';
import Link from 'next/link';
import { useRef } from 'react';

export default function HeroSection() {
	const taglineControls = useAnimationControls();
	const [linkButtonsScope, animateLinkButtons] = useAnimate();
	const progressBarRef = useRef<HTMLDivElement | null>(null);

	return (
		<div className={'relative flex min-h-screen flex-col items-center justify-start md:flex-row'}>
			<div className={'mt-[250px] flex flex-col gap-4 md:mt-[350px]'}>
				<div className="relative">
					<FloatingNacho />
					<LetterPullup
						words={"Nacho the Kat, the first fair-launched memecoin on Kaspa."}
						delay={0.05}
						className={'relative z-10 text-6xl md:text-7xl'}
						onAnimationComplete={() => {
							taglineControls.start({
								opacity: 1
							});
							animateLinkButtons('.part-button', { opacity: 1 }, { delay: 0.3 }).then(() => {
								if (progressBarRef.current) {
									progressBarRef.current.style.opacity = '1';
								}
							});
						}}
					/>
					<motion.div
						className="mt-4 text-xl md:text-2xl"
						initial={{ opacity: 0 }}
						animate={taglineControls}
					>
						Inspired by Kaspa Co-Founder, Shai Wyborski&apos;s pet cat.
					</motion.div>
				</div>
				<div className={'mb-10 flex flex-wrap gap-6'} ref={linkButtonsScope}>
					<Link href={'#about'}>
						<PartButton active={false} icon={<LucideCoins />} onClick={() => {}} className={'opacity-0'}>
							Tokenomics
						</PartButton>
					</Link>
					<Link href={'#about'}>
						<PartButton
							active={false}
							icon={<LucideEarth />}
							onClick={() => {}}
							className={'opacity-0'}
						>
							Vision
						</PartButton>
					</Link>
					<Link href={'#trade-nacho'}>
						<PartButton
							active={false}
							icon={<LucideChartCandlestick />}
							onClick={() => {}}
							className={'opacity-0'}
						>
							Trade
						</PartButton>
					</Link>
					<Link href={'#socials'}>
						<PartButton active={false} icon={<LucideUsers />} onClick={() => {}} className={'opacity-0'}>
							Socials
						</PartButton>
					</Link>
				</div>
				{crowdfunding.active && crowdfunding.campaign && (
					<div className={'mt-32 progress-section opacity-0'} ref={progressBarRef}>
						<CrowdfundingProgress campaign={crowdfunding.campaign} />
					</div>
				)}
			</div>
		</div>
	);
}
