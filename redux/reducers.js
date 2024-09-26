const initialState = {
  lang:"jp"
};

export const reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case 'changeLangReducer':
      return { ...state, lang: state.lang === "en" ? "jp" : "en"};
   default:
      return state;
  }
};
