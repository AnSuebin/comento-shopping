import styled from 'styled-components'
import ProductDetailInfo from '../components/ProductDetailInfo'
import ProductDetailReview from '../components/ProductDetailReview'
import Header from '../components/Header'
import { useState } from 'react'
import BusketButton from '../components/BusketButton'

const MainImg = styled.img`
  width: 390px;
  height: 420px;
  object-fit: cover;
`
const ProductInfoContainer = styled.div`
  width: 390px;
`

const ProductName = styled.h5`
  font-size: 20px;
  font-weight: 700;
  margin-top: 23px;
  margin-bottom: 0;
`
const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  margin-bottom: 24px;
`
const ProductInfoButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 390px;
  height: 48px;
`

const ProductInfoButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  font-weight: ${(props) => props.$fontWeight};
  border: 1px solid rgba(238, 238, 238, 1);
  font-size: 16px;
  cursor: pointer;
`
const ProductDetailContainer = styled.div`
  width: 390px;
`
const ProductDetail = () => {
  const [detail, setDetail] = useState(true)
  const ProductInfoOnClick = () => {
    setDetail(true)
  }
  const ProductReviewOnClick = () => {
    setDetail(false)
  }
  return (
    <ProductDetailContainer>
      <Header />
      <MainImg
        src="https://raw.githubusercontent.com/congchu/coment-shop-server/master/assets/images/product1.jpg"
        alt="비숑 블랙 머그잔"
      />
      <ProductInfoContainer>
        <ProductName>비숑 블랙 머그잔</ProductName>
        <ProductPrice>21,800원</ProductPrice>
      </ProductInfoContainer>
      <ProductInfoButtonContainer>
        <ProductInfoButton
          $backgroundColor="rgba(238, 238, 238, 1)"
          $fontWeight="700"
          onClick={ProductInfoOnClick}
        >
          상품 설명
        </ProductInfoButton>
        <ProductInfoButton onClick={ProductReviewOnClick}>
          상품 후기
        </ProductInfoButton>
      </ProductInfoButtonContainer>
      {detail ? <ProductDetailInfo /> : <ProductDetailReview />}
      <BusketButton />
    </ProductDetailContainer>
  )
}
export default ProductDetail
