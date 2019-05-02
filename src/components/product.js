import * as PropTypes from "prop-types"
import React from "react"
import { Link, graphql } from "gatsby"
import slug from "slug"

class Product extends React.Component {
  static propTypes = {
    product: PropTypes.shape({
      nid: PropTypes.string.isRequired,
    }).isRequired,
  }

  render() {
    const { nid, title } = this.props.product
    return (
      <div className="product" key={nid}>
        <Link to={`/products/${slug(title)}`}>{title}</Link>
      </div>
    )
  }
}

export default Product

export const productFragment = graphql`
  fragment Product_details on ProductsJson {
    nid
    title
  }
`
