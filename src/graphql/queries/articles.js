import { gql } from "@apollo/client";

export const GET_ARTICLES = gql`
  query GetArtices {
    articles {
      data {
        id
        attributes {
          title
          slug
          description
          createdAt
          content
          tag

          image {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
`;
