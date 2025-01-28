var modalPortfolioDesc = null

function openModalPortfolioDesc(modalName) {
  document.getElementById(modalName).style.display = "block";
  modalPortfolioDesc = document.getElementById(modalName)
}

function closeModalPortfolioDesc() {
  modalPortfolioDesc.style.display = "none";
  modalPortfolioDesc = null
}

// $(document).click(function(event) {
//   //if you click on anything except the modal itself or the "open modal" link, close the modal
//   if (!$(event.target).closest(modalPortfolioDesc).length) {
//     modalPortfolioDesc.style.display = "none"
//   }
// });

document.addEventListener("click", event => {
  if (modalPortfolioDesc != null) {
    if (!$(event.target).closest(".modal-portfolio-desc-content, .content-more").length) {
      modalPortfolioDesc.style.display = "none";
      modalPortfolioDesc = null
    }
  }
})
