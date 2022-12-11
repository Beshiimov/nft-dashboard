import {FC, useState} from 'react';
import Image from 'next/image'
import InfiniteScroll from 'react-infinite-scroll-component';

import {Block, NftBlocks, NFTsContainer} from './NFTsStyle';
import {Title} from './CurrenciesStyle';
import ape from '/public/ape.png'

const NFTs:FC = () => {
	const [count, setCount] = useState(20)

	const NFT = (key = 1) => <Block key={key}>
		<Image src={ape} height={300} width={250} alt="Nft" quality={100} />
		<p>author</p>
		<Title><h3>Bored Ape</h3></Title>
		<li>
			<p>Price</p>
			<span>0.7 ETH</span>
		</li>
	</Block>

  const filledArray = Array(count).fill(0);
  const NFTCollection = filledArray.map((_, index) => NFT(index))


	return (
		<NFTsContainer>
			<Title>
				<h3>NFTs</h3>
			</Title>
			<InfiniteScroll
				dataLength={count}
				next={() => setCount(count +5)}
				hasMore={count < 100}
				loader={<h4>Loading...</h4>}
				endMessage={<h2 style={{color: "saddlebrown"}}>It's All NFTs</h2>}
			>
				<NftBlocks>
					{NFTCollection}
				</NftBlocks>
			</InfiniteScroll>
		</NFTsContainer>
	);
};

export default NFTs;