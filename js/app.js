//* For smooth scroll
document.addEventListener('DOMContentLoaded', function() {
  const menu = document.getElementById('menu');
  menu.addEventListener('click', function(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    if (href) {
      const targetId = href.substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
  
//* To add the Navigation menu
document.addEventListener("DOMContentLoaded", function() {
  const menuItems = ["Breakfast", "Lunch", "Dinner", "Desserts"];
  const menuList = document.getElementById("menu");

  menuItems.forEach(item => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = "#" + item.toLowerCase();
    anchor.textContent = item;
    listItem.appendChild(anchor);
    menuList.appendChild(listItem);
  });
});

//* add the active scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.food-section');
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      const targetId = section.getAttribute('id');
      const navLinks = document.querySelectorAll('nav ul li a');
      navLinks.forEach(link => {
        if (link.getAttribute('href').substring(1) === targetId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  });
});
