import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProducts($slug: String!) {
    products(filters: { slug: { eq: $slug } }) {
      data {
        id
        attributes {
          title
          description
          slug
          stack
          content
          href
          thumbnail {
            data {
              attributes {
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;
