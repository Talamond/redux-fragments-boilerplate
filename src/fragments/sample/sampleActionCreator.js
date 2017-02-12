export function createActionCreators(actionTypes) {

  function clickButton() {
    // console.log('sdasd');
    // console.log(actionTypes.CLICK_BUTTON);
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
