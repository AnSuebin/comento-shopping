import ProductBrief from '../components/ProductBrief'
import styled from 'styled-components'
import Header from '../components/Header'
import ThemeButton from '../components/ThemeButton'
import { mockTheme1Produdcts, mockTheme2Produdcts } from '../data/mockData'

const ThinLine = styled.hr`
  border: solid 1px rgba(238, 238, 238, 1);
`

const BoldLine = styled.hr`
  border: solid 8px rgba(238, 238, 238, 1);
`

const ThemeSection = styled.div`
  width: 341px;
  padding-top: 43px;
  padding-bottom: 40px;
`

const ProductSection = styled.div`
  padding-top: 43px;
  padding-bottom: 82px;
`
const Home = () => {
  console.log(mockTheme1Produdcts)
  return (
    <div>
      <Header />
      <ThinLine />
      <ThemeSection>
        <ThemeButton themeName={'# 겨울 방한템'} />
        <ThemeButton themeName={'# 따순머그컵'} marginLeft="13px" />
      </ThemeSection>
      <BoldLine />
      <ProductSection>
        {mockTheme1Produdcts.map((product) => (
          <ProductBrief
            img={product.thumbnail}
            productName={product.name}
            productIntroduction={product.description}
          />
        ))}
      </ProductSection>
    </div>
  )
}

export default Home
