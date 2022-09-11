// 상수처럼 계속 쓰이는 키값이기 때문에 지정
const BASKET = 'BASKET'

const getBasketItems = () => {
  const items = localStorage.getItem(BASKET)
  return items ? JSON.parse(items) : []
}

const addItemToBasket = (product) => {
  // TODO :이미 지정되어 있는 장바구니 상품 리스트를 불러와서 거기에 넣기
  // 리스트로 들어오기 때문에 []로 push해오도록 설정
  //1.  getBasketItems함수로 로컬 스토리지에서 기존 product리스트 불러오기
  const items = getBasketItems()
  // 2. 새로온 product와 리스트의 아이템 비교
  // find 메소드. 조건에 맞는것이 있는지 없는지 판단
  // 있다면 요소 즉시 반환하고 멈춤 하나만 반환
  // !! 사용을 통해 boolean 값 반환
  const isSameProduct = !!items.find((item) => item.id === product.id)

  // 3. 동일 상품이 없다면, item리스트에 product 추가, localStorage에 아이템 추가
  if (!isSameProduct) {
    items.push(product)
    localStorage.setItem(BASKET, JSON.stringify(items))
  }
}

export { getBasketItems, addItemToBasket }
