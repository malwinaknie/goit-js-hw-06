const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector("ul.gallery");
console.log(list);

const newGallery = images.map((el) =>
  list.insertAdjacentHTML(
    "beforebegin",
    `<li><img height = 300px src="${el.url}" alt="${el.alt}"/></li>`
  )
);

const liStyle = document.querySelectorAll('li');
liStyle.forEach((elem)=> {
  elem.style.display = "inline";
  elem.style.padding = "10px";
  elem.style.listStyle = "none"
})