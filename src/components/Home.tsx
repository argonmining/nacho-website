'use client';
// This component basically houses the entire website, and is used so that the metadata can be used in the page.
import Footer from '@/components/Footer';
import HeroSection from '@/sections/Hero';
import IntroductionSection from '@/sections/Introduction';
import ProductsSection from '@/sections/Products';
import RoadmapSection from '@/sections/Roadmap';
import SocialsSection from '@/sections/Socials';
import TeamSection from '@/sections/Team';
import TradeSection from '@/sections/Trade';
import VideosSection from '@/sections/Videos';
import dynamic from 'next/dynamic';
import FloatingMenu from '@/components/ui/FloatingMenu';

const Background = dynamic(() => import('@/components/Background'), {
	ssr: false
});

export default function Home() {
	return (
		<>
			<main className={'dark mx-6 flex flex-col md:mx-12'}>
				<FloatingMenu />
				<HeroSection />
				<IntroductionSection />
				<RoadmapSection />
				<TeamSection />
				<ProductsSection />
				<TradeSection />
				<SocialsSection />
				<VideosSection />
				<Footer />
			</main>
			<Background />
		</>
	);
}
