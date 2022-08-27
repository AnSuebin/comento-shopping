import styled from 'styled-components'

const Button = styled.button`
  width: 390px;
  height: 70px;
  background-color: rgba(36, 219, 175, 1);
  font-size: 16px;
  font-weight: 700;
  border: none;
`

const BusketButton = () => {
  return (
    <div>
      <Button>장바구니 담기</Button>
    </div>
  )
}

export default BusketButton
