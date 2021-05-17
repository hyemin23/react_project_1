import {
  ADD_WISH_FAILURE,
  ADD_WISH_REQUEST,
  ADD_WISH_SUCCESS,
  LOAD_WISH_FAILURE,
  LOAD_WISH_REQUEST,
  LOAD_WISH_SUCCESS,
} from '../action';

const init = {
  isWishLoading: false,
  isWishDone: false,
  isWishError: null,
  isCartLoading: false,
  isCartError: null,
  isCartDone: false,
  userInfo: null,
  wishList: [],
  wishInfo: {},
};

export const cartReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_WISH_REQUEST:
      return {
        isWishLoading: true,
        isWishDone: false,
        isWishError: null,
      };
    case ADD_WISH_SUCCESS:
      return {
        ...state,
        isWishLoading: false,
        isWishDone: true,
        userInfo: { ...action.user },
        wishList: [...state.wishList, action.productId],
      };
    case ADD_WISH_FAILURE:
      return {
        isWishLoading: false,
        isWishError: action.error,
      };

    // saga에서 post 정보를 가져오기?
    case LOAD_WISH_REQUEST:
      return {
        isCartLoading: true,
        isCartError: null,
        isCartDone: false,
      };
    case LOAD_WISH_SUCCESS:
      return {
        ...state,
        isCartLoading: false,
        isCartDone: true,
      };
    case LOAD_WISH_FAILURE:
      return {
        isCartLoading: false,
        isCartError: action.error,
      };
    default:
      return state;
  }
};

export default cartReducer;