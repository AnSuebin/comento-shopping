import { useState, useEffect } from 'react'
// import styled from 'styled-components'
import BasketItem from '../components/BasketItem'
import * as storage from '../utils/storage'
import Header from '../components/Header'
import styled from 'styled-components'

const BasketContainer = styled.div`
  width: 390px;
`

const Basket = () => {
  const [basketItems, setBasketItems] = useState([])
  const [basketItemCount, setbasketItemCount] = useState(0)

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
  }, [basketItemCount])

  const onClickRemoveButton = (productId) => {
    // TODO : 장바구니 상품 삭제 로직 추가
    storage.removeBasketItem(productId)
    // 상품 갯수 추가하면서 리랜더링하게 해주기
    setbasketItemCount(basketItemCount - 1)
  }

  return (
    <BasketContainer>
      <Header />
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
      <div>{basketItemCount}</div>
    </BasketContainer>
  )
}

export default Basket
