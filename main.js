const articleFooter = document.querySelector('.article-footer')
const shareBtn = document.querySelector('.share-btn')
const footer = document.querySelector('.article-footer')

articleFooter.addEventListener('click', () => {

  // To control desktop show/hide links
  shareBtn.classList.toggle('share-btn-active')

  // To control mobile show/hide links
  footer.classList.toggle('share-mobile-active')
})