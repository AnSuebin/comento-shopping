import styled from 'styled-components'

const Tegbutton = styled.button`
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-left: ${(props) => props.$marginLeft || '0'};
`

const ThemeButton = ({ themeName, marginLeft, onClick }) => {
  return (
    <>
      <Tegbutton $marginLeft={marginLeft} onClick={onClick}>
        {themeName}
      </Tegbutton>
    </>
  )
}

export default ThemeButton
