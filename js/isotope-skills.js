$(function () {
  const $skillsGrid = $('#resume .skills-grid');
  const $skillsFilters = $('#resume .filter-control li');

  if (!$skillsGrid.length) return;

  $skillsGrid.isotope({
    itemSelector: '.skills-grid-item',
    layoutMode: 'fitRows',
    filter: '*'
  });

  $skillsFilters.on('click', function () {
    $skillsFilters.removeClass('tab-active');
    $(this).addClass('tab-active');

    $skillsGrid.isotope({
      filter: $(this).attr('data-filter')
    });
  });

  // Recalculate when the Resume modal becomes visible.
  const resume = document.getElementById('resume');

  if (resume) {
    const observer = new MutationObserver(function () {
      if ($('#resume').hasClass('resume-on')) {
        requestAnimationFrame(function () {
          $skillsGrid.isotope({
            filter: '*'
          });
          $skillsGrid.isotope('layout');
        });
      }
    });

    observer.observe(resume, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  // Recalculate when images finish loading.
  $skillsGrid.imagesLoaded(function () {
    $skillsGrid.isotope('layout');
  });
});