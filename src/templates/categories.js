import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import slug from "slug"
import Img from "gatsby-image"

const Categories = ({ pageContext, data }) => {
  const { category } = pageContext
  const { edges } = data.allProductsJson

  return (
    <Layout>
      <h1>{category}</h1>
      <ul>
        {edges.map(({ node }) => {
          return (
            <div key={node.nid}>
              <Img
                fluid={node.hero_image.childImageSharp.fluid}
                style={{ width: "300px" }}
              />
              <Link to={`/product/${slug(node.title).toLowerCase()}`}>
                {node.title}
              </Link>
              <div>{node.statement_of_id}</div>
              <div>${node.price}</div>
            </div>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Categories

// The post template's GraphQL query. Notice the “nid”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query($category: String) {
    allProductsJson(filter: { category: { in: [$category] } }) {
      edges {
        node {
          nid
          title
          category
          average_overall_rating
          review_count
          statement_of_id
          price
          hero_image {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
