$("#ENGAGE_KEY").click(function() {
	console.log("ping");
	$("text").addClass("appear");
});

$("#ABORT_KEY").click(function() {
	console.log("unping");
	$("text").removeClass("appear");
});
