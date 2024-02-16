const bannerImage = document.getElementById('post-img').src

window.addEventListener('load', () => {
  document.getElementById(
    'header'
  ).style.background = `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
  url(${bannerImage}) center/cover no-repeat fixed`
})
