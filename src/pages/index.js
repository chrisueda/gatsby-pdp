import React from "react"
import { Link, graphql } from "gatsby"
import _ from "lodash"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allProductsJson: { group },
  },
}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Benefit Cosmetics</h1>
    <ul>
      {group.map(category => (
        <li key={category.fieldValue}>
          <Link to={`/${_.kebabCase(category.fieldValue)}/`}>
            {category.fieldValue}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allProductsJson(limit: 2000) {
      group(field: category) {
        fieldValue
      }
    }
  }
`
