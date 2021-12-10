const RouteParams = {
  SLUG: ':slug',
};

const ROUTES = {
  ROOT: '/',
  ATTRACTIONS: '/attractions',
  ATTRACTIONS_SLUG: `/attractions/${RouteParams.SLUG}`,
};

export default ROUTES;
