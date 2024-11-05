

// Menu data 
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];


//  Getting Started 
const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add("flex-ctr");



// Creating a Menu Bar 
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");



// Adding Menu Buttons 
menuLinks.forEach(link => {
    const newEl = document.createElement("a");
    newEl.href = link.href;
    newEl.textContent = link.text;
    topMenuEl.append(newEl);
}) 