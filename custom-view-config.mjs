/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Mustafa Custom View',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'test-project-12121',
    },
    production: {
      customViewId: 'cm8h71q85004fyd010ntrxux3',
      url: 'https://comforting-alfajores-5abed2.netlify.app',
    },
  },
  oAuthScopes: {
    view: ['view_products'],
    manage: ['manage_products'],
  },
  type: 'CustomPanel',
  typeSettings: {
    size: 'SMALL',
  },
  locators: ['products.product_details.general'],
};

export default config;
