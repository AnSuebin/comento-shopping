import styled from 'styled-components'
import productDetail from '../utils/productBichonImgs/ProductDetailImg.png'

const ProductDetail = styled.img`
  width: 342px;
  padding-left: 24px;
  padding-right: 24px;
`

const ProductDetailInfo = () => {
  return (
    <>
      <ProductDetail src={productDetail} />
    </>
  )
}

export default ProductDetailInfo
