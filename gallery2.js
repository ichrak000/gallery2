function upDate(previewPic) {
  console.log("Événement déclenché (mouseover / focus)");
  console.log("previewPic.alt :", previewPic.alt);
  console.log("previewPic.src :", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = previewPic.alt;
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
  console.log("Événement déclenché (mouseout / blur)");

  const imageDiv = document.getElementById("image");
  imageDiv.textContent = "Hover over an image below to display here";
  imageDiv.style.backgroundImage = "url('')";
}


function addTabFocus() {
  console.log("Page chargée – ajout des tabindex");

  const images = document.querySelectorAll(".preview");


  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");


    images[i].addEventListener("mouseover", function () {
      upDate(this);
    });
    images[i].addEventListener("mouseout", unDo);


    images[i].addEventListener("focus", function () {
      upDate(this);
    });
    images[i].addEventListener("blur", unDo);
  }
}


window.onload = addTabFocus;
