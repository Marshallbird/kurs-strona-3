const navMobile = document.querySelector('.nav__mobile');
const navBtn = document.querySelector('.hamburger');
const footYear = document.querySelector('.footer__bottom-year');
const allNavItems = document.querySelectorAll('.nav__link')

const handleNav = () => {
	navBtn.classList.toggle('is-active');
	navMobile.classList.toggle('nav__mobile--active');
};

allNavItems.forEach((item) =>
	item.addEventListener('click', () =>
		navMobile.classList.remove('nav-mobile--active')
	)
);
allNavItems.forEach((item) =>
	item.addEventListener('click', () => navBtn.classList.remove('is-active'))
);

navBtn.addEventListener('click', handleNav);


const handleFooterYear = () => {
	const year = new Date().getFullYear();
	footYear.innerText = year;
};
handleFooterYear();
