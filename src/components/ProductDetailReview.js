import styled from 'styled-components'
import ReviewImg1 from '../utils/reviewImgs/Review1.png'
import ReviewImg2 from '../utils/reviewImgs/Review2.png'

const ReviewImg = styled.img`
  width: 341px;
  padding-left: 24px;
  padding-right: 25px;
  padding-top: ${(props) => props.$paddingTop || '0'};
  padding-bottom: ${(props) => props.$paddingBottom || '0'};
`

const ProductDetailReview = () => {
  return (
    <div>
      <ReviewImg src={ReviewImg1} alt="상냥한 어피치 리뷰" $paddingTop="25px" />
      <ReviewImg src={ReviewImg2} alt="다정한 네오 리뷰" $paddingTop="16px" />
      <ReviewImg
        src={ReviewImg2}
        alt="다정한 네오 리뷰"
        $paddingTop="16px"
        $paddingBottom="75px"
      />
    </div>
  )
}

export default ProductDetailReview
