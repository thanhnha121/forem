function slideSidebar(side, direction) {
  try {
    if (!document.getElementById('sidebar-wrapper-' + side)) {
      return;
    }
    if (direction === 'intoView') {
      document.getElementById('articles-list').classList.add('modal-open');
      document.body.classList.add('modal-open');
      document
        .getElementById('sidebar-wrapper-' + side)
        .classList.add('swiped-in');
      document
        .getElementById('articles-list')
        .addEventListener('touchmove', preventDefaultAction, false);
    } else {
      document.getElementById('articles-list').classList.remove('modal-open');
      document.body.classList.remove('modal-open');
      document
        .getElementById('sidebar-wrapper-' + side)
        .getElementsByClassName('side-bar')[0].scrollTop = 0;
      document
        .getElementById('sidebar-wrapper-' + side)
        .classList.remove('swiped-in');
      document
        .getElementById('articles-list')
        .removeEventListener('touchmove', preventDefaultAction, false);
    }
  } catch (e) {
    // pass
  }
}
