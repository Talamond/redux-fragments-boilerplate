export function createActionCreators(actionTypes) {

  function clickButton(id, tabIndex) {
	  return {
	    type: actionTypes.CLICK_BUTTON,
      payload: {
	      id,
        tabIndex
      }
    };
  }

	return {
    clickButton
	};
}
