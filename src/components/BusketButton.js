import styled from 'styled-components'
import { useLocation } from 'react-router-dom'

const Button = styled.button`
  width: 390px;
  height: 70px;
  background-color: rgba(36, 219, 175, 1);
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;
`

const BusketButton = ({ onClick }) => {
  const location = useLocation()
  return (
    <div>
      <Button onClick={onClick}>
        {location.pathname === '/basket' ? '주문하기' : '장바구니 담기'}
      </Button>
    </div>
  )
}

export default BusketButton
