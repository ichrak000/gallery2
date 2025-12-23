function upDate(previewPic) {
  console.log("Événement déclenché");
  console.log("previewPic.alt :", previewPic.alt);
  console.log("previewPic.src :", previewPic.src);

  document.getElementById("image").textContent = previewPic.alt;

  document.getElementById(
    "image"
  ).style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
  document.getElementById("image").textContent =
    "Hover over an image below to display here";

  document.getElementById("image").style.backgroundImage = "url('')";
}

const images = document.querySelectorAll(".preview");

images.forEach((img) => {
  img.addEventListener("mouseover", () => upDate(img));
  img.addEventListener("mouseout", unDo);
});
