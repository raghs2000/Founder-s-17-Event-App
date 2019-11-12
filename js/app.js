var url1 = "Images/map.gif";
var url2 = "Images/canada.gif";

(function() {
	var el = document.querySelector(".map");
	el.onclick = function() {
		el.src = el.src == url1 ? url2 : url1;
	};
})();