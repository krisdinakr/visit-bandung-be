const RouteParams = {
  SLUG: ':slug',
  ID: ':id',
};

const ROUTES = {
  ROOT: '/',
  ATTRACTIONS: '/attractions',
  ATTRACTIONS_SLUG: `/attractions/${RouteParams.SLUG}`,
  ATTRACTIONS_ID: `/attractions/${RouteParams.ID}`,
};

export default ROUTES;
