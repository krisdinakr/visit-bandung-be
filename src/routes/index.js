const RouteParams = {
  SLUG: ':slug',
  ID: ':id',
  CATEGORY: ':category',
};

const ROUTES = {
  ROOT: '/',
  PLACES: '/places',
  PLACES_ID: `/places/${RouteParams.ID}`,
  PLACES_SLUG: `/places/slug/${RouteParams.SLUG}`,
  PLACES_CATEGORY: `/places/category/${RouteParams.CATEGORY}`,
};

export default ROUTES;
