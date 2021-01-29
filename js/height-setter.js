var standardElement = $('#weekly-container');
var standardHeight = standardElement.clientHeight;

// Set height of other box
var daily_container = $("#daily-height-setter");
var monthly_container = $("#monthly-height-setter")

// monthly_container.style.height = standardElement.clientWidth * 1.393;
// daily_container.style.height = standardElement.clientWidth * 1.393;

daily_container.height(standardElement.height());
monthly_container.height(standardElement.height());

console.log(monthly_container.height());


function PrintDiv(div){
	div = div[0]
	html2canvas(div).then(function(canvas){
		var myImage = canvas.toDataURL();
		downloadURI(myImage, "저장이미지이름.png") 
	});
}

function downloadURI(uri, name){
	var link = document.createElement("a")
	link.download = name;
	link.href = uri;
	document.body.appendChild(link);
	link.click();
}