import styled from 'styled-components'
import ProductDetailInfo from '../components/ProductDetailInfo'
import ProductDetailReview from '../components/ProductDetailReview'
import Header from '../components/Header'
import BusketButton from '../components/BusketButton'
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProductDetail } from '../data/mockData'
// storage라는 표시를 잘 드러내기 위해서 아래와 같은 형식으로도 사용
// 기존 방식 import {getBasketItems, addItemToBasket} from '../utils/storage'
import * as storage from '../utils/storage'

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
  // active를 활용해서 background 변경
  background-color: ${(props) =>
    props.active ? 'rgba(238, 238, 238, 1)' : 'white'};
  font-weight: ${(props) => (props.active ? '700' : '500')};
  border: 1px solid rgba(238, 238, 238, 1);
  font-size: 16px;
  cursor: pointer;
`
const ProductDetailContainer = styled.div`
  width: 390px;
`

const ProductDetail = () => {
  const navigate = useNavigate()

  //url에서 paramter 받아오는 로직
  const { productId } = useParams()
  const [product, setProduct] = useState()

  useEffect(() => {
    const result = getProductDetail(productId)
    setProduct(result)
  }, [productId])

  // 버튼 쿨릭에 따라 상품 정보 변경 로직
  const [infoType, setInfoType] = useState('detail')
  const onClickInfoButton = (infoTypeId) => {
    if (infoTypeId === 1) {
      setInfoType('detail')
    } else if (infoTypeId === 2) {
      setInfoType('review')
    }
  }

  const onClickAddBasketButton = () => {
    // 장바구니에 아이템을 담는다
    storage.addItemToBasket(product)
    // 장바구니 페이지로 이동한다.
    navigate('/basket')
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
        <ProductInfoButton
          // active를 활용해서 background 변경
          active={infoType === 'detail'}
          onClick={() => {
            onClickInfoButton(1)
          }}
        >
          상품 설명
        </ProductInfoButton>
        <ProductInfoButton
          // active를 활용해서 background 변경
          active={infoType === 'review'}
          onClick={() => {
            onClickInfoButton(2)
          }}
        >
          상품 후기
        </ProductInfoButton>
      </ProductInfoButtonContainer>
      {infoType === 'detail' && <ProductDetailInfo />}
      {infoType === 'review' && <ProductDetailReview />}
      <BusketButton onClick={onClickAddBasketButton} />
    </ProductDetailContainer>
  )
}
export default ProductDetail
