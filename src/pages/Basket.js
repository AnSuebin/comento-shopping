import { useState, useEffect } from 'react'
// import styled from 'styled-components'
import BasketItem from '../components/BasketItem'
import * as storage from '../utils/storage'
import Header from '../components/Header'
import styled from 'styled-components'
import BusketButton from '../components/BusketButton'
import { useNavigate } from 'react-router-dom'

const BasketContainer = styled.div`
  width: 390px;
`
const BasketMain = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  justify-content: space-between;
`

const BasketList = styled.div``

const BuyingInfoUl = styled.div`
  margin-bottom: 10px;
`

const BuyingInfoLi = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  margin-bottom: 5px;
`
const BuyingInfoTitle = styled.h5`
  font-weight: 400;
  font-size: 16px;
  color: #616161;
  margin: 0;
`
const BuyingInfo = styled.h5`
  font-weight: 400;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.86);
  margin: 0;
`

const Basket = () => {
  const [basketItems, setBasketItems] = useState([])
  const [basketItemCount, setbasketItemCount] = useState(0)
  // const [priceList, setPriceList] = useState([])
  const [priceSum, setPriceSum] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    //1. 장바구니 데이터 가져오기
    const items = storage.getBasketItems()
    setBasketItems(items)
    setbasketItemCount(items.length)
  }, [])

  // itemCount가 바뀔때마다 실행하는 함수
  // 위의 함수와 함께 사용할 수 없는 이유는 둘이 연결되어있는 함수이기 때문에 무한루프의 위험
  useEffect(() => {
    const items = storage.getBasketItems()
    setBasketItems(items)
    // 여기 왜 와야하는지 잘 모르겠음!
    // 왜 여기 오지 않으면 바뀌지 않는지 잘 모르겠음!
    setPriceSum(
      items
        .map(
          // 1.원과 콤마 제거
          // 2. 숫자로 변경
          (item) => +item.price.slice(0, -1).replace(',', '')
        )
        .reduce((a, b) => a + b)
    )
  }, [basketItemCount])

  const onClickRemoveButton = (productId) => {
    // TODO : 장바구니 상품 삭제 로직 추가
    storage.removeBasketItem(productId)
    // 상품 갯수 추가하면서 리랜더링하게 해주기
    setbasketItemCount(basketItemCount - 1)
  }
  const onClickBusketButton = () => {
    window.confirm('주문되었습니다.')
    navigate('/')
  }

  return (
    <BasketContainer>
      <Header />
      <BasketMain>
        <BasketList>
          {/* 2. UI 구현하기 */}
          {basketItems &&
            basketItems.map((product) => (
              <BasketItem
                key={product.id}
                Thumnail={product.thumbnail}
                productName={product.name}
                price={product.price}
                onClickRemoveButton={() => onClickRemoveButton(product.id)}
              />
            ))}
        </BasketList>
        <BuyingInfoUl>
          <BuyingInfoLi>
            <BuyingInfoTitle>상품 금액 ({basketItemCount}개)</BuyingInfoTitle>
            <BuyingInfo>{priceSum}원</BuyingInfo>
          </BuyingInfoLi>
          <BuyingInfoLi>
            <BuyingInfoTitle>배송비</BuyingInfoTitle>
            <BuyingInfo>{priceSum >= 30000 ? '0원' : '3500원'}</BuyingInfo>
          </BuyingInfoLi>
          <BuyingInfoLi>
            <BuyingInfoTitle>총 주문 금액</BuyingInfoTitle>
            <BuyingInfo>{priceSum}원</BuyingInfo>
          </BuyingInfoLi>
        </BuyingInfoUl>
      </BasketMain>
      <BusketButton onClick={onClickBusketButton} />
    </BasketContainer>
  )
}

export default Basket
