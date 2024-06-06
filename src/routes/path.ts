export const rootPaths = {
  root: '/',
  pagesRoot: 'dashboard',
  authRoot: 'authentication',
  errorRoot: 'error',
};

const paths = {
  default: `/${rootPaths.pagesRoot}/default`,
  categories: `/${rootPaths.pagesRoot}/categories`,
  products: `/${rootPaths.pagesRoot}/products`,
  customers: `/${rootPaths.pagesRoot}/customers`,
  orders: `/${rootPaths.pagesRoot}/orders`,
  reports: `/${rootPaths.pagesRoot}/reports`,
  coupons: `/${rootPaths.pagesRoot}/coupons`,
  inbox: `/${rootPaths.pagesRoot}/inbox`,
  login: `/${rootPaths.authRoot}/login`,
  signup: `/${rootPaths.authRoot}/sign-up`,
  forgotPassword: `/${rootPaths.authRoot}/forgot-password`,
  404: `/${rootPaths.errorRoot}/404`,
};
export default paths;
