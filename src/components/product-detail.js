import React from "react"

// import presets from "../utils/presets"
// import typography, { rhythm, scale } from "../utils/typography"
import { graphql } from "gatsby"
import ComponentB from "./ComponentB"

class ProductDetail extends React.Component {
  render() {
    const {
      title,
      field_statement_of_id,
      field_original_price,
      field_image,
      field_background_image,
    } = this.props.product

    const ProductDetails = () => (
      <div>
        <h1>{title}</h1>
        <p>{field_statement_of_id.und[0]["value"]}</p>
        <p>{field_original_price.und[0]["value"]}</p>
      </div>
    )

    return (
      <div>
        <ComponentB />
        <ProductDetails />
      </div>
    )
  }
}

export default ProductDetail

export const ProductDetailFragment = graphql`
  fragment ProductDetail_details on ProductsJson {
    # Specify the fields from the post we need.
    nid
    title
    field_statement_of_id {
      und {
        value
      }
    }
    field_original_price {
      und {
        value
      }
    }
    field_image {
      und {
        uri
      }
    }
    field_background_image {
      und {
        uri
      }
    }
  }
`
