var currentImage = "BRUNO MARS.png";

function changeImage(id) {
    var image = document.getElementById(id);
    // Toggle between image sources
    if (currentImage === "BRUNO MARS.png") {
        image.src = "브루노마스.png";
        currentImage = "브루노마스.png";
    } else {
        image.src = "BRUNO MARS.png";
        currentImage = "BRUNO MARS.png";
    }
}


