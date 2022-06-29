import { SET_PRODUCT } from './action';

export const Sale = {
  Product: [{
    type: null,
    price: null,
    img: '',
    article: null,
  }],
};

// eslint-disable-next-line default-param-last
export const SaleReducer = (state = Sale, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        Product: action.payload,
      };
  }
  return state;
};
