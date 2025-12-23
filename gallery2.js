function upDate(previewPic) {
  console.log("upDate triggered");
  console.log(previewPic.alt);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
  console.log("unDo triggered");

  const imageDiv = document.getElementById("image");
  imageDiv.textContent =
    "Hover over an image below to display here";
  imageDiv.style.backgroundImage = "";
}

function addTabFocus() {
  console.log("Page loaded");

  const images = document.getElementsByClassName("preview");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
  }
}
