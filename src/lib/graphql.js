import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(import.meta.env.GRAPHQL_URL);

export const GET_HOMEPAGE_TABS = gql`
  query GetHomepageTabs {
    homepageOptions {
      homepageTabsComponent {
        headingLine1
        headingLine2
        headingLine3
        introBodyText
        getAQuoteUrl
        bookOnlineUrl
        tabs {
          tabLabel
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
