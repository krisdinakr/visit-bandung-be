const RouteParams = {
  SLUG: ':slug',
  ID: ':id',
  CATEGORY: ':category',
};

const ROUTES = {
  ROOT: '/',
  ATTRACTIONS: '/attractions',
  ATTRACTIONS_ID: `/attractions/${RouteParams.ID}`,
  ATTRACTIONS_SLUG: `/attractions/slug/${RouteParams.SLUG}`,
  ATTRACTIONS_CATEGORY: `/attractions/category/${RouteParams.CATEGORY}`,
};

export default ROUTES;
