// Select
const filterBox = document.querySelectorAll('.pro-box');
const colorBox = document.querySelectorAll('.project__item');
	document.querySelector('.project__list').addEventListener('click', event => {

		if (event.target.tagName !== 'LI') return false;
		let filterClass = event.target.dataset['pro_filter'];

		filterBox.forEach(elem => {
			elem.classList.remove('hide');
			if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
				elem.classList.add('hide');	} });

		colorBox.forEach(elem => {
			elem.classList.remove('active-all');
			elem.classList.remove('active-site');
			elem.classList.remove('active-lp');
			elem.classList.remove('active-shop');
			if (filterClass == "all") {
				event.target.classList.add('active-all');}
			else if (filterClass == "site") {
				event.target.classList.add('active-site');}
			else if (filterClass == "lp") {
				event.target.classList.add('active-lp');}
			else if (filterClass == "shop") {
				event.target.classList.add('active-shop');}
		});
	});
