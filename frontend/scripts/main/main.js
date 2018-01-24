
'use strict';

document.addEventListener("DOMContentLoaded", function() {

	var tabItem = document.querySelectorAll(".tab-item"),
			tabLink = document.querySelectorAll(".tab-link");

	for (var i = 0; i < tabLink.length; i++) {
    tabLink[i].addEventListener('click', function(e) {
    	e.preventDefault();

    	var targetTab = document.querySelector(e.target.dataset.target);

    	if (targetTab) {
    		tabItem.forEach(function(tab) {
    			tab.classList.remove('active')
    		});

    		targetTab.classList.add('active');

    		tabLink.forEach(function(link) {
    			link.classList.remove('active');
    		});

    		e.target.classList.add('active');
    	}
 
    });
  }

  var modal = document.querySelector('.modal'),
  		btnModal = document.querySelector('.btn-modal'),
  		btnCloseModal =	document.querySelectorAll('.btn-close-modal');

  btnModal.addEventListener('click', function() {
  	modal.classList.add('active');
  });

	btnCloseModal.forEach(function(btnClose) {
		btnClose.addEventListener('click', function() {
			modal.classList.remove('active');
		});
	});

  window.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.classList.remove('active');
    }
  });

});

