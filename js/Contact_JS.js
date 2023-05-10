function showImage(img) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = img.src;
    modalImg.style.width = "500px";
    modalImg.style.height = "500px";
  }
  
  function hideImage() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
  }
  