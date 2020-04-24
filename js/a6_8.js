function dummy(arg) {
	console.log(arg);
}

dummy('загрузился');

// function init() {};

let mainProgress = 0;


$('#btn1').click(function() {
	mainProgress = mainProgress + 1;

	$('#globProgress').prop(
		"style", "width: " + mainProgress + "%");
});

$('#btn3').click(function() {
	mainProgress = mainProgress + 3;

	$('#globProgress').prop(
		"style", "width: " + mainProgress + "%");
});

$('#btn7').click(function() {
	mainProgress = mainProgress + 7;

	$('#globProgress').prop(
		"style", "width: " + mainProgress + "%");
});

 // $(document).ready(init);

// function step1() {
// 	mainProgress = mainProgress + 1;


// }