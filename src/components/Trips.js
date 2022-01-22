//rafce react affow function component with Es7 module
import React from "react"
import styled from "styled-components"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"

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
                  width: 280
                  height: 420
                  placeholder: DOMINANT_COLOR
                  formats: NO_CHANGE
                )
              }
            }
          }
        }
      }
    }

    # query TripQuery {
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
        <div key={idx}>
          {/* <Img
            src={item.node.img.childImageSharp.fluid.src}
            fluid={item.node.img.childImageSharp.fluid}
          /> */}

          <GatsbyImage image={item.node.img.childImageSharp.gatsbyImageData} />
        </div>
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
const ProductWrapper = styled.div``
