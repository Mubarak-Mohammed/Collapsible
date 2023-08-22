let collap = document.getElementsByClassName("collapsible");

let collapLength = collap.length;

for(let i = 0; i < collapLength; i++){
    collap[i].addEventListener("click", function() {
        collap[i].classList.toggle("active")
        let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    });
}