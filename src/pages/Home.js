import ProductBrief from '../components/ProductBrief'
import styled from 'styled-components'

const MainLine = styled.hr`
  border: solid 1px rgba(238, 238, 238, 1);
`

const Tegbutton = styled.button`
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px 16px;
  border: none;
  border-radius: 10px;
  margin-left: ${(props) => props.$marginLeft || '0'};
`
const BoldLine = styled.hr`
  border: solid 8px rgba(238, 238, 238, 1);
`

const BottonContainer = styled.div`
  width: 341px;
  padding-top: 43px;
  padding-bottom: 40px;
`

const MainContainer = styled.div`
  padding-top: 43px;
  padding-bottom: 82px;
`
const Home = () => {
  return (
    <div>
      <MainLine />
      <BottonContainer>
        <Tegbutton># 겨울 방한템</Tegbutton>
        <Tegbutton $marginLeft="13px"># 따순머그컵</Tegbutton>
      </BottonContainer>
      <BoldLine />
      <MainContainer>
        <ProductBrief
          img={
            'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg'
          }
          productName={'비숑 블랙 머그잔'}
          productIntroduction={
            '쌀쌀한 날씨에 따뜻한 우유, 커피 한잔하기 좋은 블랙 & 화이트 비숑 머그잔입니다.'
          }
        />
        <ProductBrief
          img={
            'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product2.jpg'
          }
          productName={'가열 보온 티코스터 온열 원터치 컵 받침대'}
          productIntroduction={
            '언제나 따뜻하게 최대 12시간 동안 최대 60도의 온도로 따뜻한 차를 즐길 수 있습니다.'
          }
        />
        <ProductBrief
          img={
            'https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product3.jpg'
          }
          productName={'벨루즈까사 솜사탕 파스텔 머그 4종 세트'}
          productIntroduction={
            '솜사탕처럼 부드러운 쉐입에 스트라이프 조각이 더해져 심플하면서도 세련된 파스텔 컬러의 머그'
          }
        />
      </MainContainer>
    </div>
  )
}

export default Home
