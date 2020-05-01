/* Loading Text */
var originalText = $("#loadingText").text(),
	j = 0;

f = 0;

var checkInterval = setInterval(function () {
	f++;
	console.log(f);
	if (f == 5) {
		clearInterval(loadingInterval);
		clearInterval(checkInterval);
	}
}, 1000);

var loadingInterval = setInterval(function () {
	$("#loadingText").append(".");
	j++;
	//console.log(j)
	if (j == 4) {
		$("#loadingText").html(originalText);
		j = 0;
	}
}, 500);

/* Loading Page */
var myVar;

function myFunction() {
	myVar = setTimeout(showPage, 2000);
}

function showPage() {
	document.getElementById("loader").style.display = "none";
	document.getElementById("page").style.display = "block";
}
