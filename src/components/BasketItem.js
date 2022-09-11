import styled from 'styled-components'

const BasketItemStyled = styled.div`
  width: 368px;
  height: 126px;
  padding: 15px;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

const ProductImage = styled.img`
  object-fit: cover;
  width: 120px;
  height: 100px;
`

const LayoutText = styled.div`
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row: 16px;
  grid-template-areas:
    'ProductTitle CloseButton'
    'ProductPrice ProductPrice';
`

const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
  grid-area: ProductTitle;
`

const CloseButton = styled.h3`
  font-weight: 700;
  font-size: 20px;
  grid-area: CloseButton;
  display: flex;
  justify-content: flex-end;
`
const ProductPrice = styled.h3`
  font-weight: 400;
  font-size: 16px;
  grid-area: ProductPrice;
  display: flex;
  align-items: flex-end;
`

const ThinLine = styled.hr`
  border: solid 1px rgba(238, 238, 238, 1);
`

const BasketItem = ({ Thumnail, productName, price, onClickRemoveButton }) => {
  return (
    <>
      <BasketItemStyled>
        <ProductImage src={Thumnail} alt={productName} />
        <LayoutText>
          <ProductTitle>{productName}</ProductTitle>
          <CloseButton onClick={onClickRemoveButton}>x</CloseButton>
          <ProductPrice>{price}원</ProductPrice>
        </LayoutText>
        <ThinLine />
      </BasketItemStyled>
    </>
  )
}
