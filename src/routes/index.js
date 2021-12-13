const RouteParams = {
  SLUG: ':slug',
  ID: ':id',
  CATEGORY: ':category',
};

const ROUTES = {
  ROOT: '/',
  ATTRACTIONS: '/attractions',
  ATTRACTIONS_SLUG: `/attractions/${RouteParams.SLUG}`,
  ATTRACTIONS_ID: `/attractions/${RouteParams.ID}`,
  ATTRACTIONS_CATEGORY: `/attractions/category/${RouteParams.CATEGORY}`,
};

export default ROUTES;
