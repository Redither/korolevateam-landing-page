var elem = document.querySelector('.gallery__grid-masonry');
var msnry = new Masonry( elem, {
  itemSelector: '.gallery__grid-item',
  percentPosition: true,
  columnWidth: ".gallery__grid-item",
//gutter: 20,
//fitWidth: true,
//   horizontalOrder: true
});