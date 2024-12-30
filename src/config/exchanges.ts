export interface Exchange {
	logo: string;
	id: string; // CoinGecko exchange ID
	name: string;
	url: string;
}
const exchanges: Exchange[] = [
	{
		name: 'KSPR Bot',
		logo: '/img/exchanges/kspr-bot.png',
		id: 'kspr-bot',
		url: 'https://t.me/kspr_home_bot?start=nacho'
	},
	{
		name: 'Pionex',
		logo: '/img/exchanges/pionex.svg',
		id: 'pionex',
		url: 'https://pionex.com/en/signUp?r=GONACHO'
	},
	{
		name: 'PionexUS',
		logo: '/img/exchanges/pionex.svg',
		id: 'pionex-us',
		url: 'https://accounts.pionex.us/en/signup?ref=NACHO'
	},
	{
		name: 'CoinEx',
		logo: '/img/exchanges/coinex.svg',
		id: 'coinex',
		url: 'https://www.coinex.com/register?refer_code=6zrua'
	},
	{
		name: 'Coinstore',
		logo: '/img/exchanges/coinstore.png',
		id: 'coinstore',
		url: 'https://coinstore.com/signup?invitCode=hrntWC75'
	},
	{
		name: 'AscendEX',
		logo: '/img/exchanges/ascendex.png',
		id: 'ascendex',
		url: 'https://ascendex.com/en/register?inviteCode=UQ0BAVVXS'
	}
];
export default exchanges;
 