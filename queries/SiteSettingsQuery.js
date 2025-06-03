import { gql } from "@apollo/client";

export const SITE_DATA_QUERY = gql`
  query GetSiteData {
    generalSettings {
      title
      description
    }
  }
`;
