const btn = document.querySelector('.btn-nav');

btn.onclick = function() {
    document.querySelector('nav').classList.toggle('hide');
}