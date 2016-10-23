const bananas = (state = "", action) => {
  switch (action.type) {
    case 'BANANAS':
      return 'I love BANANAS';
      break
    case 'ORANGES':
      return 'I hate oranges';
      break
    default:
      return state;
  }
}

export default bananas;
