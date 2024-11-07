

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

//part 1B
// Select and cache the <nav id="sub-menu"> element
let subMenuEl = document.querySelector('#sub-menu');

// Set the height of subMenuEl to "100%"
subMenuEl.style.height = "100%";

// Set the background color of subMenuEl to the value of the --sub-menu-bg CSS custom property
subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--sub-menu-bg');

// Add the class "flex-around" to subMenuEl
subMenuEl.classList.add('flex-around');

// Set the CSS position property of subMenuEl to "absolute"
subMenuEl.style.position = "absolute";

// Set the CSS top property of subMenuEl to "0"
subMenuEl.style.top = "0";

// part 2B
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];
let topMenuLinks = topMenuEl.querySelectorAll("a");

topMenuEl.addEventListener("click", function(event) {
  // Prevent default behavior of the link
  event.preventDefault();
  
  // Return if the clicked element is not an <a>
  if (event.target.localName !== "a") return;

  // Toggle the "active" class on the clicked link
  if (event.target.classList.contains("active")) {
    event.target.classList.remove("active");
    subMenuEl.style.top = "0"; // Hide submenu if active link is clicked again
    return;
  }

  // Remove "active" class from all links using forEach
  topMenuLinks.forEach(link => link.classList.remove("active"));
  
  // Add "active" class to the clicked link
  event.target.classList.add("active");

  // Find the clicked link's corresponding menu object in `menuLinks`
  const linkObject = menuLinks.find(link => link.text === event.target.textContent);
  
  // Check if the link has subLinks and set up the submenu accordingly
  if (linkObject && linkObject.subLinks) {
    buildSubmenu(linkObject.subLinks);
    subMenuEl.style.top = "100%"; // Show submenu
  } else {
    subMenuEl.style.top = "0"; // Hide submenu if no subLinks
  }
});

// Part 3b
function buildSubmenu(subLinks) {
  // Clear any existing content in subMenuEl
  subMenuEl.innerHTML = '';

  // Create and append <a> elements for each subLink
  subLinks.forEach(subLink => {
    const a = document.createElement("a");
    a.href = subLink.href;
    a.textContent = subLink.text;
    subMenuEl.appendChild(a);
  });
}

// Part 4b
subMenuEl.addEventListener("click", function(event) {
  // Prevent default behavior of the link
  event.preventDefault();
  
  // Return if the clicked element is not an <a>
  if (event.target.localName !== "a") return;

  // Log the content of the clicked <a> in the submenu
  console.log(event.target.textContent);

  // Hide the submenu by setting top to "0"
  subMenuEl.style.top = "0";

  // Remove "active" class from all top menu links
  topMenuLinks.forEach(link => link.classList.remove("active"));

  // Update `mainEl` content with the clicked submenu item's text
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});

// Part 5b    
subMenuEl.addEventListener("click", function(event) {
  // Prevent default behavior of the link
  event.preventDefault();
  
  // Return if the clicked element is not an <a>
  if (event.target.localName !== "a") return;

  // Log the content of the clicked <a> in the submenu
  console.log(event.target.textContent);

  // Hide the submenu by setting top to "0"
  subMenuEl.style.top = "0";

  // Remove "active" class from all top menu links
  topMenuLinks.forEach(link => link.classList.remove("active"));

  // Update `mainEl` content with the clicked submenu item's text
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
