export function createActionCreators(actionTypes) {

  function clickButton() {
	  return {
	    type: actionTypes.CLICK_BUTTON,
      payload: {
      }
    };
  }

	return {
    clickButton
	};
}
