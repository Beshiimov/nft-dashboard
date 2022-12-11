import {WalletContainer, Card} from './WalletStyle';
import {Title} from './ExchangerStyle';

const Wallet = () => {
	return (
		<WalletContainer>
			<Title>
				<h3>My Wallet</h3>
				<h3>0.00 $</h3>
			</Title>
			<Card>
				<p>Babajan Beshimov</p>
			</Card>
		</WalletContainer>
	);
};

export default Wallet;