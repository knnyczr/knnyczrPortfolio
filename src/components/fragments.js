// import { graphql } from "gatsby";

// export const worksPage = graphql`
//     fragment allWorks on allDataJson{
//         allDataJson{
//             edges {
//                 node {
//                     title
//                     description
//                     summary
//                     tools
//                     links{
//                         github
//                     }
//                     image {
//                         childImageSharp{
//                             fluid(maxWidth: 2000){
//                             ...GatsbyImageSharpFluid
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `;