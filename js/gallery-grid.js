var elem = document.querySelector('.gallery_grid-masonry');
window.onload = function() {
  if (window.innerWidth < 726) {
      return
  } else {
    var msnry = new Masonry( elem, {
      itemSelector: '.gallery_grid-item',
      percentPosition: true,
      columnWidth: ".gallery_grid-item",
    //gutter: 20,
    //fitWidth: true,
    //   horizontalOrder: true
    });
  }
}
