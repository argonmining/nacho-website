'use client';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import TokenomicsPart from '@/parts/Tokenomics';
import VisionPart from '@/parts/Vision';
import { useState } from 'react';

/* eslint-disable no-unused-vars */
enum Part {
	Tokenomics,
	Vision
}
/* eslint-enable no-unused-vars */

export default function IntroductionSection() {
	const [active] = useState<Part | null>(Part.Tokenomics);
	return (
		<div className={'flex pt-12'} id="about">
			<div className={'flex flex-col gap-12 md:gap-96 lg:flex-row'}>
				<div className={'flex flex-shrink-0 flex-col space-y-6'}>
					<div>
						<SectionTitle>Get to know Nacho</SectionTitle>
						<SectionSubtitle>Learn more about the Nacho project.</SectionSubtitle>
					</div>
				</div>
				<div className={'flex flex-shrink'}>
					{active === Part.Tokenomics && <TokenomicsPart />} {active === Part.Vision && <VisionPart />}
				</div>
			</div>
		</div>
	);
}
