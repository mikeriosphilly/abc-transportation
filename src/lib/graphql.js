import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(import.meta.env.GRAPHQL_URL);

export const GET_HOMEPAGE_TABS = gql`
  query GetHomepageTabs {
    homepageOptions {
      homepageTabsComponent {
        getAQuoteUrl
        bookOnlineUrl
        tabs {
          tabLabel
          tabBodyText
          tabIcon {
            node {
              sourceUrl
              altText
            }
          }
          subcategories {
            title
            bodyText
            icon {
              node {
                sourceUrl
                altText
              }
            }
            image {
              node {
                sourceUrl
                altText
                caption
              }
            }
          }
        }
      }
    }
  }
`;

export async function getHomepageData() {
  const data = await client.request(GET_HOMEPAGE_TABS);
  return data.homepageOptions.homepageTabsComponent;
}
