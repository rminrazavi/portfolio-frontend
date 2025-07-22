import { gql } from "@apollo/client";

export const CREATE_MESSAGE = gql`
  mutation CreateMessage($name: String!,$email: String!,$message: String!) {
    createMessage(data: { name: $name, email: $email, message: $message }) {
      data {
        id
        attributes {
          name
        }
      }
    }
  }
`;
