import React from "react"
import { graphql } from "gatsby"

import Product from "../components/product"
import Layout from "../components/layout"

class Products extends React.Component {
  render() {
    let { allProductsJson } = this.props.data

    const products = allProductsJson.edges.map(e => e.node)

    return (
      <Layout>
        {products.map(product => (
          <Product key={product.nid} product={product} />
        ))}
      </Layout>
    )
  }
}

export default Products

export const pageQuery = graphql`
  query {
    allProductsJson {
      edges {
        node {
          nid
          title
          ...Product_details
          ...ProductDetail_details
        }
      }
    }
  }
`
