document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.querySelectorAll(".heart");

  const likedImages = JSON.parse(localStorage.getItem("likedImages")) || []; // Paimami is localstorage liked img id

  hearts.forEach((heart) => {
    const card = heart.closest(".card");  // <-- nelabai suprantu kodel closest
    const imageId = card.dataset.id;     //  <-- dataset.id ?

    if (likedImages.includes(imageId)) { // jeigu musu patikusi nuotrauka buvo localstorage tai jai duodame extra klase liked
      heart.classList.add("liked");
    }

    heart.addEventListener("click", () => {
      if (heart.classList.contains("liked")) { // jei nuotrauka turi liked tai panaikiname ji
        heart.classList.remove("liked");
        const index = likedImages.indexOf(imageId);
        if (index > -1) likedImages.splice(index, 1);// nesu tikras bet manau kad cia yra isimama paspaustos nuotraikos id is visu palikintu nuotrauku masyvo
      } else {
        heart.classList.add("liked"); // prideda klase liked
        likedImages.push(imageId); //img kurio nuotrauka buvo palikinta pridedama prie visu palikintu img
      }

      localStorage.setItem("likedImages", JSON.stringify(likedImages)); // isaugo musu patikusias nuotraukas i localstorage
    });
  });
});

// nors ir teko pasinaudoti Gpt taciau banziau suprasti kaip viskas vyksta su komentarais