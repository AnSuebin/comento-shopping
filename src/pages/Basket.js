import styled from 'styled-components'
import BasketItem from '../components/BasketItem'
import ProductImage from '../utils/productBichonImgs/ProductDetailImg.png'

const Basket = () => {
  return (
    <div>
      <BasketItem
        Thumnail={ProductImage}
        productName="비숑"
        price="12000원"
        // onClickRemoveButton={onClickRemoveButton}
      />
    </div>
  )
}

export default Basket
