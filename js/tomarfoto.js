Webcam.set({
    width: 200,
    heigth: 200,
    imgage_format:'jpeg',
    jpeg_quality:90
})
Webcam.attach("#camera")

function takess(){
    Webcam.snap(function(data_uri){
        var cameraDiv = document.getElementById("camera");
        if(cameraDiv.style.display === "none"){
            alert("Desplega la camara para tomar la foto")
        }else{
            document.getElementById("circle-container").innerHTML = 
            `<img src="${data_uri}">`;
        }
    });
}

function toggleCameraDisplay() {
    var cameraDiv = document.getElementById("camera");
    var computedStyle = window.getComputedStyle(cameraDiv);
    var displayValue = computedStyle.getPropertyValue("display");
    if (displayValue === "none") {
      cameraDiv.style.display = "block";
    } else {
      cameraDiv.style.display = "none";
    }
  }