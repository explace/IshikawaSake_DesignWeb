const initialState = {
  lang:"jp",
  navTransition: false,
  posts:[],
};

export const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case 'changeLangReducer':
      return { ...state, lang: state.lang === "en" ? "jp" : "en"};
    case 'changeNavTransitionReducer':
      return { ...state, navTransition: action.payload};
    case 'getPostsReducer':
      return { ...state, posts: action.payload};
   default:
      return state;
  }
};
