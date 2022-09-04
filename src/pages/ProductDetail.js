import styled from 'styled-components'
import ProductDetailInfo from '../components/ProductDetailInfo'
import ProductDetailReview from '../components/ProductDetailReview'
import Header from '../components/Header'
import BusketButton from '../components/BusketButton'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductDetail } from '../data/mockData'

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
  //url에서 paramter 받아오는 로직
  const { productId } = useParams()
  const [product, setProduct] = useState()
  useEffect(() => {
    const result = getProductDetail(productId)
    setProduct(result)
  })

  // 버튼 쿨릭에 따라 상품 정보 변경 로직
  const [infoType, setInfoType] = useState()
  const onClickInfoButton = (infoTypeId) => {
    if (infoTypeId === 1) {
      setInfoType('detail')
    } else if (infoTypeId === 2) {
      setInfoType('review')
    }
  }

  return (
    <ProductDetailContainer>
      <Header />
      {/* 제품 윗단 불러오기 */}
      {product && (
        <>
          <MainImg src={product.thumbnail} alt={product.name} />
          <ProductInfoContainer>
            <ProductName>{product.name}</ProductName>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductInfoContainer>
        </>
      )}

      <ProductInfoButtonContainer>
        {infoType === 'detail' && (
          <>
            <ProductInfoButton
              $backgroundColor="rgba(238, 238, 238, 1)"
              $fontWeight="700"
              onClick={() => {
                onClickInfoButton(1)
              }}
            >
              상품 설명
            </ProductInfoButton>
            <ProductInfoButton
              onClick={() => {
                onClickInfoButton(2)
              }}
            >
              상품 후기
            </ProductInfoButton>
          </>
        )}
        {infoType === 'review' && (
          <>
            <ProductInfoButton
              onClick={() => {
                onClickInfoButton(1)
              }}
            >
              상품 설명
            </ProductInfoButton>
            <ProductInfoButton
              $backgroundColor="rgba(238, 238, 238, 1)"
              $fontWeight="700"
              onClick={() => {
                onClickInfoButton(2)
              }}
            >
              상품 후기
            </ProductInfoButton>
          </>
        )}
      </ProductInfoButtonContainer>
      {infoType === 'detail' && <ProductDetailInfo />}
      {infoType === 'review' && <ProductDetailReview />}
      <BusketButton />
    </ProductDetailContainer>
  )
}
export default ProductDetail
