import styled from 'styled-components'

const ProductContainer = styled.div`
  width: 342px;
`

const ProductImg = styled.img`
  object-fit: cover;
  width: 341px;
  height: 204px;
`
const ProductName = styled.h5`
  font-size: 20px;
  font-weight: 700;
  margin-top: 12px;
  margin-bottom: 0px;
`
const ProductIntroduction = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin-top: 12px;
`

const ProductBrief = ({ img, productName, productIntroduction }) => {
  return (
    <ProductContainer>
      <ProductImg src={img} alt={productName} />
      <ProductName>{productName}</ProductName>
      <ProductIntroduction>{productIntroduction}</ProductIntroduction>
    </ProductContainer>
  )
}

export default ProductBrief
