import styled from 'styled-components'

const BasketItemStyled = styled.div`
  width: 368px;
  height: 126px;
  padding: 15px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'ProductImage  LayoutText';
`

const ProductImage = styled.img`
  object-fit: cover;
  width: 120px;
  height: 100px;
  grid-area: ProductImage;
`

const LayoutText = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-row: 16px;
  grid-template-areas:
    'ProductTitle CloseButton'
    'ProductPrice .';
  grid-area: LayoutText;
`

const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: -0.01em;
  color: #000000;
  margin: 0;
  grid-area: ProductTitle;
`

const CloseButton = styled.h3`
  font-weight: 700;
  font-size: 20px;
  grid-area: CloseButton;
  margin: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
`
const ProductPrice = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 16px;
  grid-area: ProductPrice;
  display: flex;
  align-items: flex-end;
`

const ThinLine = styled.hr`
  border: solid 1px rgba(238, 238, 238, 1);
`

const BasketItem = ({
  Thumnail,
  productName,
  price,
  // onClickRemoveButton
}) => {
  return (
    <>
      <BasketItemStyled>
        <ProductImage src={Thumnail} alt={productName} />
        <LayoutText>
          <ProductTitle>{productName}</ProductTitle>
          <CloseButton
          //   onClick={onClickRemoveButton}
          >
            X
          </CloseButton>
          <ProductPrice>{price}원</ProductPrice>
        </LayoutText>
        <ThinLine />
      </BasketItemStyled>
    </>
  )
}

export default BasketItem
