import ExchangeCard from '@/components/Cards/ExchangeCard';
import { SectionSubtitle, SectionTitle } from '@/components/ui/Typography/SectionTitle';
import exchanges from '@/config/exchanges';

export default function TradeSection() {
	return (
		<div className={'flex pt-12'}>
			<div className={'space-y-6'}>
				<div>
					<SectionTitle id={'trade-nacho'}>📈 Trade Nacho</SectionTitle>
					<SectionSubtitle>Learn about the best ways to buy and sell Nacho tokens.</SectionSubtitle>
				</div>
				<div className={'flex w-fit flex-wrap gap-6'}>
					{exchanges.map((exchange) => (
						<ExchangeCard
							exchange={exchange}
							key={exchange.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
