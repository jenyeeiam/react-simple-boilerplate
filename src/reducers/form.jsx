

const form = (state={}, action) => {
  // console.log("action", action.type);
  console.log("mystate", state);
  switch (action.type) {
  case 'FORM_TEXT':
    console.log("boo");
    return Object.assign(
      state,
      {
        formText: action.text,
        id: action.id
      }
    );
    default:
      return state;
  }
}

export default form;
