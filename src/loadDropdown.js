import $ from "jquery";

let isCollapsed = true;
console.log('running')
const setCollapsed = () => {
	if (isCollapsed) {
		$(".goals-content").addClass("is-collapsed");
		$(".view-more").text("SHOW");
	} else {
		$(".goals-content").removeClass("is-collapsed");
		$(".view-more").text("HIDE");
	}
};

const loadDropDown = () => {
    $(document).ready(() => {
		setCollapsed();

        $(".view-more").click(() => {
			console.log('clicked')
			isCollapsed = !isCollapsed;

			setCollapsed();
		});
    });
};

export default loadDropDown;
