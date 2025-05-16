import { gql } from "@apollo/client";

export const POST_LIST_FRAGMENT = gql`
  fragment PostListFragment on Post {
    id
    title
    uri
    excerpt
    date
    featuredImage {
      node {
        sourceUrl
        altText
      }
    }
    author {
      node {
        name
        avatar {
          url
        }
      }
    }
  }
`;
