export function createActionCreators(actionTypes) {

  function clickButtonParent() {
	  return {
	    type: actionTypes.CLICK_BUTTON_PARENT,
      payload: {
      }
    };
  }

	return {
    clickButtonParent
	};
}
