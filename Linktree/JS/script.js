$(document).ready(function() {
	$("#links a").each(function(index) {
		$(this).delay(200 * index).queue(function(next) {
			$(this).addClass("show");
			next();
		});
	});
});

window.addEventListener("load", function(){
	var footer = document.getElementsByTagName("footer")[0];
	var bodyHeight = document.body.offsetHeight;
	var vwptHeight = window.innerHeight;
	if (vwptHeight > bodyHeight) {
		footer.style.position = "fixed";
		footer.style.bottom = "0";
		footer.style.width = "100%";
	}

	let year = new Date().getFullYear();
	if (year > 2023) {
		let copyright = document.querySelector('.copyright');
		copyright.textContent = ` - ${year}`;
	}
});