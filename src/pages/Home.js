import ProductBrief from '../components/ProductBrief'
import styled from 'styled-components'
import Header from '../components/Header'
import ThemeButton from '../components/ThemeButton'
import { mockTheme1Produdcts, mockTheme2Produdcts } from '../data/mockData'
import { useEffect, useState } from 'react'

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
  const [products, setProducts] = useState(mockTheme1Produdcts)

  useEffect(() => {
    setTimeout(() => {
      setProducts(mockTheme1Produdcts)
    }, 1000)
  }, [])

  const onClickThemeButton = (themeId) => {
    if (themeId === 1) {
      setProducts(mockTheme1Produdcts)
    } else if (themeId === 2) {
      setProducts(mockTheme2Produdcts)
    }
  }
  return (
    <div>
      <Header />
      <ThinLine />
      <ThemeSection>
        <ThemeButton
          themeName={'# 겨울 방한템'}
          onClick={() => onClickThemeButton(1)}
        />
        <ThemeButton
          themeName={'# 따순머그컵'}
          marginLeft="13px"
          onClick={() => onClickThemeButton(2)}
        />
      </ThemeSection>
      <BoldLine />
      <ProductSection>
        {products.map((product) => (
          <ProductBrief
            key={product.name}
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
