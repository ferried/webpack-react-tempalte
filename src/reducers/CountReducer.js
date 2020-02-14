/*
 * @Date: 2020-02-14 10:25:12
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 12:00:28
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
const initialState = {
  number: 0,
};

const incrementReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const stated = state;
      stated.number += 1;
      console.log(state);
      return { ...stated };
    }
    default: return state;
  }
};

export default incrementReducer;
