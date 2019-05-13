import React from "react"
import { Link, graphql } from "gatsby"
import slug from "slug"
import Layout from "../components/Layout"

class Products extends React.Component {
  renderProductList() {
    return this.props.data.allProductsJson.edges.map(product => {
      return (
        <div className="item" key={product.node.nid}>
          <Link to={`/products/${slug(product.node.title)}`}>
            {product.node.title}
          </Link>
        </div>
      )
    })
  }

  render() {
    return <Layout>{this.renderProductList()}</Layout>
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
        }
      }
    }
  }
`
