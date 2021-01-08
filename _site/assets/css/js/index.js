const socialButton = document.querySelector('.social-links > button');
console.log(socialButton);

function dropDown() {
  const dropDownLinks = document.querySelectorAll('.social-links');

  dropDownLinks.forEach(link => link.style.display = "block");
};

socialButton.addEventListener('click', dropDown);