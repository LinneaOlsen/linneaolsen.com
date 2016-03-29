var gridItems = document.querySelectorAll(".grid-item");
var fullscreenFaded = document.querySelector(".fullscreen-faded")
var popupBox = document.querySelector(".pop-up")

function addClickListener(element, content) {
	element.addEventListener("click", function(event){
		fullscreenFaded.classList.remove("hidden");
		console.log(event)
		console.log(content)
		popupBox.innerHTML = content
	});
}

for (var i = 0; i < gridItems.length; i ++){
	var content = gridItems[i].querySelector(".popup-content").innerHTML;
	addClickListener(gridItems[i], content)
}

fullscreenFaded.addEventListener("click", function(event){
	fullscreenFaded.classList.add("hidden");
});

