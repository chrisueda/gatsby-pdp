const _ = require(`lodash`)
const path = require(`path`)
const slug = require(`slug`)
const slash = require(`slash`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const productsTemplate = path.resolve("src/templates/products.js")
  const categoryTemplate = path.resolve("src/templates/categories.js")

  // The “graphql” function allows us to run arbitrary
  // queries against this Gatsbygram's graphql schema. Think of
  // it like Gatsbygram has a built-in database constructed
  // from static data that you can run queries against.
  //
  // Post is a data node type derived from data/posts.json
  // which is created when scraping Instagram. “allProductsJson”
  // is a "connection" (a GraphQL convention for accessing
  // a list of nodes) gives us an easy way to query all
  // Post nodes.
  return graphql(
    `
      {
        allProductsJson(limit: 1000) {
          edges {
            node {
              title
              nid
              category
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    // We want to create a detailed page for each
    // Instagram post. Since the scraped Instagram data
    // already includes an ID field, we just use that for
    // each page's path.
    const products = result.data.allProductsJson.edges
    _.each(products, edge => {
      // Gatsby uses Redux to manage its internal state.
      // Plugins and sites can use functions like "createPage"
      // to interact with Gatsby.
      createPage({
        // Each page is required to have a `path` as well
        // as a template component. The `context` is
        // optional but is often necessary so the template
        // can query data specific to each page.
        path: `/product/${slug(edge.node.title).toLowerCase()}/`,
        component: productsTemplate,
        context: {
          nid: edge.node.nid,
        },
      })
    })

    let categories = []
    _.each(products, edge => {
      if (_.get(edge, "node.category")) {
        categories = categories.concat(edge.node.category)
      }
    })

    // Eliminate duplicate tags
    categories = _.uniq(categories)

    // Make tag pages
    categories.forEach(category => {
      createPage({
        path: `/${_.kebabCase(category)}/`,
        component: categoryTemplate,
        context: {
          category,
        },
      })
    })
  })
}
