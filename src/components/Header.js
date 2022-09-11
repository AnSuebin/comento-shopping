import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const MainTitleContainer = styled.div`
  text-align: center;
`
const BackButton = styled.h5`
  position: absolute;
  margin-top: 0;
  margin-left: 10px;
  font-size: 18px;
  font-weight: 700;
  top: 20px;
`

const MainTitle = styled.h5`
  margin-top: 20px;
  margin-bottom: 17px;
  font-size: 18px;
  font-weight: 700;
`

const Header = () => {
  const location = useLocation()

  return (
    <MainTitleContainer>
      {location.pathname !== '/' && <BackButton>{'<'}</BackButton>}
      <MainTitle>
        {location.pathname === '/basket' ? '장바구니' : '코멘토 쇼핑'}
      </MainTitle>
    </MainTitleContainer>
  )
}

export default Header
