import styled, {keyframes} from 'styled-components';

const gradientAnim = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

/*------------------------------------*/
const WalletContainer = styled.div`
  margin-bottom: 30px;
`

const Card = styled.div`
  height: 150px;
  position: relative;
  border-radius: 8px;
  background: linear-gradient(-45deg, #ed193b, #b66002, #e5c926);
  background-size: 400% 400%;
  animation: ${gradientAnim} 7s ease infinite;
	transition: all .3s ease;
  p {
    font-weight: 600;
	  color: #fff;
    line-height: 0;
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
	
	&:hover {
		transform: scale(1.03);
	}
`

export { WalletContainer, Card }