import * as PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import ProductHero from "../components/ProductHero"
import Layout from "../components/Layout"

class ProductTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      productsJson: PropTypes.object.isRequired,
    }),
  }
  render() {
    return (
      <Layout location={this.props.location}>
        <ProductHero product={this.props.data.productsJson} />
      </Layout>
    )
  }
}

export default ProductTemplate

// The post template's GraphQL query. Notice the “nid”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query($nid: Int) {
    # Select the post which equals this id.
    productsJson(nid: { eq: $nid }) {
      nid
      title
      statement_of_id
      review_count
      average_overall_rating
      hero_image_background {
        publicURL
      }
      hero_image {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
