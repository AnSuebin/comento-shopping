import styled from 'styled-components'
import productBichonImgs from '../utils/productBichonImgs/ProductDetailImg.png'

const ProductDetailImg = styled.img`
  width: 342px;
  padding-top: 25px;
  padding-left: 24px;
  padding-right: 24px;
`

const ProductDetailInfo = () => {
  return (
    <div>
      <ProductDetailImg
        src={productBichonImgs}
        alt="product Bichon Detail Infomation"
      />
    </div>
  )
}

export default ProductDetailInfo
