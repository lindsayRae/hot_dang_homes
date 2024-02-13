import { mapMainMenuItems } from "./mapMainMenuItems";

export const getMenu = async () => {
  const params = {
    query: `query MenuQuery {
        acfOptionsMainMenu {
            mainMenu {
                callToActionButton {
                    destination {
                      ... on Page {
                        uri
                      }
                    }
                    label
                  }
              mainMenu {
                menuItem {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
                items {
                  destination {
                    ... on Page {
                      uri
                    }
                  }
                  label
                }
              }
            }
          }
    }
  `,
  };

  const response = await fetch(`${process.env.WP_GRAPHQL_URL}`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await response.json();

  return {
    mainMenuItems: mapMainMenuItems(data.acfOptionsMainMenu.mainMenu.mainMenu),
    callToActionLabel:
      data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
    callToActionDestination:
      data.acfOptionsMainMenu.mainMenu.callToActionButton.destination.uri,
  };
};
