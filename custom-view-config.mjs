/**
 * @type {import('@commercetools-frontend/application-config').ConfigOptionsForCustomView}
 */
const config = {
  name: 'Mustafa Prod Custom View',
  cloudIdentifier: 'gcp-eu',
  env: {
    development: {
      initialProjectKey: 'test-project-12121',
    },
    production: {
      customViewId: 'cm8g1h3fn0018sm01allrpq37',
      url: 'https://test-custom-view-prod.netlify.app',
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
