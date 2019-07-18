const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \n Is \n Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Image Updates
let logo = document.getElementById("logo-img");
logo.src = "./img/logo.png";

let cta = document.getElementById("cta-img");
cta.src = "./img/header-img.png";

let midImg = document.getElementById("middle-img");
midImg.src = "./img/mid-page-accent.jpg";

// Navigation 

let theNav = document.getElementsByTagName('nav');
let navLink = document.createElement('a');
navLink.innerText = 'Blog';
navLink.href = '#';

theNav[0].appendChild(navLink);

let navItems = document.querySelectorAll('a');

navItems[0].innerText = siteContent['nav']['nav-item-1'];
navItems[1].innerText = siteContent['nav']['nav-item-2']; 
navItems[2].innerText = siteContent['nav']['nav-item-3'];
navItems[3].innerText = siteContent['nav']['nav-item-4'];
navItems[4].innerText = siteContent['nav']['nav-item-5'];
navItems[5].innerText = siteContent['nav']['nav-item-6'];

let first = document.createElement('a');
first.innerText = 'First';
first.style.color = 'green';
first.href = '#';
theNav[0].prepend(first);

console.log(navItems);

navItems.forEach(link => link.style.color = 'green');

// Call To Action Content
let ctaHeader = document.querySelector('h1');
ctaHeader.innerText = siteContent['cta']['h1'];

let ctaButton = document.querySelector('button');
ctaButton.textContent = siteContent['cta']['button'];

// Top Content of the Main Section
let topFeaturesH4 = document.querySelectorAll('h4')[0];
topFeaturesH4.textContent = siteContent['main-content']['features-h4'];

let topFeaturesP = document.querySelectorAll('p')[0];
topFeaturesP.textContent = siteContent['main-content']['features-content'];

let topAboutH4 = document.querySelectorAll('h4')[1];
topAboutH4.textContent = siteContent['main-content']['about-h4'];

let topAboutP = document.querySelectorAll('p')[1];
topAboutP.textContent = siteContent['main-content']['about-content'];

// Bottom Content of the Main Section
let bottomServicesH4 = document.querySelectorAll('h4')[2];
bottomServicesH4.textContent = siteContent['main-content']['services-h4'];

let bottomServicesP = document.querySelectorAll('p')[2];
bottomServicesP.textContent = siteContent['main-content']['services-content'];

let bottomProductH4 = document.querySelectorAll('h4')[3];
bottomProductH4.textContent = siteContent['main-content']['product-h4'];

let bottomProductP = document.querySelectorAll('p')[3];
bottomProductP.textContent = siteContent['main-content']['product-content'];

let bottomVisionH4 = document.querySelectorAll('h4')[4];
bottomVisionH4.textContent = siteContent['main-content']['vision-h4'];

let bottomVisionP = document.querySelectorAll('p')[4];
bottomVisionP.textContent = siteContent['main-content']['vision-content'];

// Contact Content
let contactH4 = document.querySelectorAll('h4')[5];
contactH4.textContent = siteContent['contact']['contact-h4'];

let addressP = document.querySelectorAll('p')[5];
addressP.textContent = siteContent['contact']['address'];

let phone4 = document.querySelectorAll('p')[6];
phone4.textContent = siteContent['contact']['phone'];

let emailP = document.querySelectorAll('p')[7];
emailP.textContent = siteContent['contact']['email'];

// Footer Content
let footerContent = document.getElementsByTagName('p')[8];
footerContent.textContent = siteContent['footer']['copyright'];
footerContent.style.fontWeight = '600';