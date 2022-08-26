import styled from 'styled-components'
const MainTitleContainer = styled.div`
  text-align: center;
`

const MainTitle = styled.h5`
  margin-top: 20px;
  margin-bottom: 17px;
  font-size: 18px;
  font-weight: 700;
`

const Header = () => {
  return (
    <MainTitleContainer>
      <MainTitle>코멘토 쇼핑</MainTitle>
    </MainTitleContainer>
  )
}

export default Header
