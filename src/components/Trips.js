//rafce react affow function component with Es7 module
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"
export const Trips = () => {
  const data = useStaticQuery(graphql`
    query TripQuery {
      allTripsJson {
        edges {
          node {
            alt
            button
            name
            img {
              childImageSharp {
                gatsbyImageData(
                  #   width: 2000
                  # height: 420
                  placeholder: DOMINANT_COLOR
                  formats: NO_CHANGE
                )
              }
            }
          }
        }
      }
    }

    #   allTripsJson {
    #     edges {
    #       node {
    #         alt
    #         button
    #         name
    #         img {
    #           childImageSharp {
    #             fluid {
    #               ...GatsbyImageSharpFluid
    #             }
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
  `)

  function getTrips(data) {
    const tripsArray = []
    data.allTripsJson.edges.forEach((item, idx) => {
      tripsArray.push(
        <ProductCard key={idx}>
          {/* <Img
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
          /> */}
          {console.log(item.node.img.childImageSharp)}
          <GatsbyImage
            // image={item.node.img.childImageSharp.gatsbyImageData}
            image={withArtDirection(
              getImage(item.node.img.childImageSharp.gatsbyImageData),
              [
                {
                  media: "(max-width: 1024px)",
                  image: getImage(
                    item.node.img.childImageSharp.gatsbyImageData
                  ),
                },
              ]
            )}
            alt={item.node.alt}
          />
          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button to="/trips">{item.node.button}</Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>Heading</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: pink;
  color: #fff;
`
const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: #000;
`

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and(max-width:1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and(max-width:868px) {
    grid-template-columns: 1fr;
  }
`
const ProductCard = styled.div`
  line-height: 2;
  width: 100%;
  height: 500px;
  position: relative;
  border-radius: 10px;
  transition: 0.2s ease;
`

const ProductInfo = styled.div``
const TextWrap = styled.div``
const ProductTitle = styled.div``
