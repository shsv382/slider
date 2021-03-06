$(document).ready(function(){
	var image = document.getElementsByClassName("image")[0].firstElementChild;
	var i = 0;
	var circles = $(".circle");
	var collection = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];
	function sleep(ms) {
		ms += new Date().getTime();
		while (new Date() < ms){}
	} 

	var change = function() {
		$(".image").fadeOut(500);
		sleep(300);
		i++;
		i = i % collection.length;
		image.src = "images/" + collection[i];		
		$(".image").fadeIn(300);
		pointer();
	}

	var right = document.getElementById("right");
	right.onclick = function() {
		change();
		clearTimeout(timerID);
		timerID = setInterval(change, 5000);
	}

	var left = document.getElementById("left");
	left.onclick = function() {
		$(".image").fadeOut(500);
		sleep(300);
		i--;
		if (i < 0) i = i + collection.length;
		image.src = "images/" + collection[i];
		$(".image").fadeIn(300);
		pointer();
		clearTimeout(timerID);
		timerID = setInterval(change, 5000);
	}

	var navi = document.getElementsByClassName("navi")[0];

	navi.onclick = function(e) {
		var target = e.target.closest(".circle");

		if (target) {
			i = target.dataset.src - 2;
			change();
		}

		clearTimeout(timerID);
		timerID = setInterval(change, 5000);
	}

	function pointer() {
		for (var j = 0; j < collection.length; j++) circles[j].style.backgroundColor = "";
		circles[i].style.backgroundColor = "#555";
	}

	pointer();

	var timerID = setInterval(change, 5000);

});