// HEADER - social media dropdown links
const socialButton = document.querySelector('.mobile-social-btn');
console.log(socialButton);

function dropDown() {
  if (!socialButton) return;
  const dropDownLinks = document.querySelector('.social-links-header');
  dropDownLinks.classList.toggle('active');
};

socialButton.addEventListener('click', dropDown);

// POSTS - Add like button