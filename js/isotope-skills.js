var $skillsGrid = $('.skills-grid')
var $skillsFilters = $('#resume .filter-control li')
$skillsGrid.imagesLoaded(function () {
  $skillsGrid.isotope({
    itemSelector: '.skills-grid-item',
    // masonry: {
    //   horizontalOrder: true
    // },
    layoutMode: 'fitRows'
  });
  $skillsFilters.on("click",  function () {
    $skillsFilters.removeClass('tab-active');
      $(this).addClass('tab-active');
    var selector = $(this).attr('data-filter');
    $skillsGrid.isotope({
      filter: selector
    })
  })
})
