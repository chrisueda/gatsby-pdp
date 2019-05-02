import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const ComponentB = () => (
  <StaticQuery
    query={graphql`
      query AllImagesAndJSON {
        images: allFile(filter: { sourceInstanceName: { eq: "images" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        datafromjson: allProductsJson {
          edges {
            node {
              field_image {
                und {
                  uri
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const { images, datafromjson } = data

      // console.log(jsonItem)
      return (
        <div>
          {datafromjson.edges.map(jsonItem => {
            const imageIndex = images.edges.findIndex(
              x =>
                x.node.name ===
                jsonItem.node.field_image.und[0].uri
                  .split(".")
                  .slice(0, -1)
                  .join(".")
            )
            return (
              <div>
                {images.edges[imageIndex] && (
                  <Img
                    fluid={images.edges[imageIndex].node.childImageSharp.fluid}
                    style={{ width: "600px" }}
                  />
                )}
              </div>
            )
          })}
        </div>
      )
    }}
  />
)
export default ComponentB
