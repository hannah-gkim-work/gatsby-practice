//rafce react affow function component with Es7 module
import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"
export const Trips = ({ heading }) => {
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
          <ProductImg>
            <GatsbyImage
              // image={item.node.img.childImageSharp.gatsbyImageData}
              image={withArtDirection(
                getImage(item.node.img.childImageSharp.gatsbyImageData),
                [
                  {
                    // media: "(min-width: 100px)",
                    image: getImage(
                      item.node.img.childImageSharp.gatsbyImageData
                    ),
                  },
                ]
              )}
              alt={item.node.alt}
            />
          </ProductImg>

          <ProductInfo>
            <TextWrap>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrap>
            <Button
              primary="true"
              round="true"
              css={`
                position: absolute;
                top: 420px;
                font-size: 14px;
              `}
              to="/trips"
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
    return tripsArray
  }

  return (
    <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductWrapper>{getTrips(data)}</ProductWrapper>
    </ProductsContainer>
  )
}

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  /* background: pink; */
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
  /* grid-template-columns: repeat(1, 1fr); */
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;
  border: blue 2px solid;

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
  border: solid 2px red;
  overflow: hidden;
`
const ProductImg = styled.div`
  height: 100%;
  max-width: 100%;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 375px;
`
const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 1rem;
  margin-left: 0.5rem;
`
