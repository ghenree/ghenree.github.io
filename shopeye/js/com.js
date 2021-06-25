jQuery(document).ready(function() {

// Select
const filterBox = document.querySelectorAll('.pro-box');
	document.querySelector('.project__list').addEventListener('click', event => {

		if (event.target.tagName !== 'LI') return false;
		let filterClass = event.target.dataset['pro_filter'];

		filterBox.forEach(elem => {
			elem.classList.remove('hide');
			if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
				elem.classList.add('hide');
			}
		});
	});
});