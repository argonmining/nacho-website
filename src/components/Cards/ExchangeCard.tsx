import { MediumButton } from '@/components/ui/Buttons/MediumButton';
import { Exchange } from '@/config/exchanges';
import { motion } from 'framer-motion';
import { LucideCandlestickChart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ExchangeCard(props: {
	exchange: Exchange;
}) {
	return (
		<motion.div
			className={
				'flex h-[280px] w-[280px] flex-col items-center gap-3 rounded-2xl border-2 border-primary bg-background p-4'
			}
			whileHover={{ translateY: 2 }}
		>
			<Image src={props.exchange.logo} alt={''} width={120} height={120} className="flex-shrink-0" />
			<div className={'text-center'}>
				<h1 className={'text-card-title'}>{props.exchange.name}</h1>
			</div>
			<Link href={props.exchange.url} target={'_blank'} className={'mt-auto w-full'}>
				<MediumButton className="w-full min-w-[200px] whitespace-nowrap">
					<LucideCandlestickChart /> Trade on {props.exchange.name}
				</MediumButton>
			</Link>
		</motion.div>
	);
}
