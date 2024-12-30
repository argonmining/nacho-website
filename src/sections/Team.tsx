import ContributorCard from '@/components/Cards/ContributorCard';
import Marquee from '@/components/ui/marquee';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import contributors from '@/config/contributors';
import { motion } from 'framer-motion';

export default function TeamSection() {
	return (
		<div className={'flex flex-col gap-6 pt-12'}>
			<div>
				<div className={'text-section-title flex w-fit gap-3'}>
					<SectionTitle>Meet the People</SectionTitle>
					<motion.span>👨‍💻</motion.span>
				</div>

				<SectionSubtitle className={'max-w-[64rem]'}>
					The Nacho team is YOU! A community-driven movement of over 40 passionate crypto enthusiasts
					and growing. Together, we’re shaping the future of finance—one paw at a time. Want to join the
					the best memecoin community out there? Let’s make Nacho history!
				</SectionSubtitle>
			</div>

			<Marquee pauseOnHover className="[--duration:30s]">
				{contributors
					.sort((a, b) => (a.creator === b.creator ? 0 : a.creator ? -1 : 1))
					.map((contributor) => (
						<ContributorCard
							key={contributor.name}
							avatar={contributor.avatar}
							name={contributor.name}
							role={contributor.role}
							socials={contributor.socials}
						/>
					))}
			</Marquee>
		</div>
	);
}
