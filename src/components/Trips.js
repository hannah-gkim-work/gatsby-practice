//rafce react affow function component with Es7 module
import React from "react"
import styled from "styled-components"

export const Trips = () => {
  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>Wrapper</ProductWrapper>
    </ProductsContainer>
  )
}
const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: red;
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`
const ProductWrapper = styled.div``
