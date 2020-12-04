var audioPlayer = document.getElementById("audiofile");
var subtitles = document.getElementById("subtitles");

var syncData = [
  { end: "0.225", start: "0.125", text: "There" },
  { end: "0.485", start: "0.225", text: "were" },
  /* ... and so on ... full json is in the demo */
];

createSubtitle();

function createSubtitle() {
  var element;
  for (var i = 0; i < syncData.length; i++) {
    element = doc.createElement("span");
    element.setAttribute("id", "c_" + i);
    element.innerText = syncData[i].text + " ";
    subtitles.appendChild(element);
  }
}

audioPlayer.addEventListener("timeupdate", function (e) {
    syncData.forEach(function (element, index, array) {
        if (audioPlayer.currentTime >= element.start && audioPlayer.currentTime <= element.end){
            subtitles.children[index].style.background = "yellow";
        }
    });
});
