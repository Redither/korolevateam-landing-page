var elem = document.querySelector('.gallery_grid-masonry');
var msnry = new Masonry( elem, {
  itemSelector: '.gallery_grid-item',
  percentPosition: true,
  columnWidth: ".gallery_grid-item",
//gutter: 20,
//fitWidth: true,
//   horizontalOrder: true
});