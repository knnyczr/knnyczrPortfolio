const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
      const artWork = path.resolve('./src/components/artWork.js')
      const previewPage = path.resolve('./src/components/pagePreview.js')
      resolve(graphql(`
        {
          allContentfulWork{
            edges{
              node{
                url
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        // console.log(result)
        result.data.allContentfulWork.edges.map(work => {
          createPage({
            // Path for this page — required
            path: `/works/${work.node.url}`,
            component: artWork,
            context: {
              contextURL: work.node.url,
            }
          })
        })
        
      })
    )
  })
}