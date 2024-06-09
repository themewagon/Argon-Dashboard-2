export const rootPaths = {
  root: '/',
  pagesRoot: '',
  authRoot: 'authentication',
  errorRoot: 'error',
};

const paths = {
  default: `${rootPaths.root}`,
  categories: `${rootPaths.root}categories`,
  products: `${rootPaths.root}products`,
  customers: `${rootPaths.root}customers`,
  orders: `${rootPaths.root}orders`,
  reports: `${rootPaths.root}reports`,
  coupons: `${rootPaths.root}coupons`,
  inbox: `${rootPaths.root}inbox`,
  login: `${rootPaths.authRoot}/login`,
  signup: `${rootPaths.authRoot}/sign-up`,
  forgotPassword: `${rootPaths.authRoot}/forgot-password`,
  404: `${rootPaths.errorRoot}/404`,
};

export default paths;
