import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
  "https://wordpress-321502-6259672.cloudwaysapps.com/graphql",
);

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
