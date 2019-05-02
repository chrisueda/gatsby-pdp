import * as PropTypes from "prop-types"
import React from "react"
import { graphql } from "gatsby"
import ProductDetail from "../components/product-detail"
import Layout from "../components/layout"

class ProductTemplate extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      productsJson: PropTypes.object.isRequired,
    }),
  }
  render() {
    return (
      <Layout location={this.props.location}>
        <ProductDetail product={this.props.data.productsJson} />
      </Layout>
    )
  }
}

export default ProductTemplate

// The post template's GraphQL query. Notice the “id”
// variable which is passed in. We set this on the page
// context in gatsby-node.js.
//
// All GraphQL queries in Gatsby are run at build-time and
// loaded as plain JSON files so have minimal client cost.
export const pageQuery = graphql`
  query($nid: Int) {
    # Select the post which equals this id.
    productsJson(nid: { eq: $nid }) {
      ...ProductDetail_details
    }
  }
`
