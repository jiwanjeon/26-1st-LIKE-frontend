const BASE_URL = 'http://15.164.170.124:8000';

export const API = {
  signUp: `${BASE_URL}/users/signup`,
  login: `${BASE_URL}/users/login`,
  carts: `${BASE_URL}/carts`,
  categories: `${BASE_URL}/categories`,
  orders: `${BASE_URL}/orders`,
  baseUrl: `${BASE_URL}`,
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.jugJgM3JP9XFInnwQJbQt02wCRW_aUnWnv5HWNC0X_g',
};

export const MockUp = {
  categories: '/data/nav/navCategories.json',
  detail: '/data/detail/detailData.json',
  accordionReview: `/data/review/accordionReview.json`,
  cartsMockUp: '/data/order/orderData.json',
  temp2: '/data/detail/detailData.json',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NX0.jugJgM3JP9XFInnwQJbQt02wCRW_aUnWnv5HWNC0X_g',
};
