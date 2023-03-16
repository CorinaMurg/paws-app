
// ******************** MAIN PAGE *********************** //
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const goToLoginPage = () => {
	mainPage.style.display = 'none';
	loginPage.style.display = 'grid';
};

const rightContent = document.querySelector('.right-content');
rightContent.addEventListener('click', e => {
	if (e.target.classList[1] === 'main-btn') {
		goToLoginPage();
	}
});


// ******************** LOGIN PAGE *********************** //
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
modalX.addEventListener('click', () => {
	loginModal.style.display = 'none';
});

const newsFeedPage = document.querySelector('.feeds-page');
const loginFormBtn = document.querySelector('.login-form-btn');
loginFormBtn.addEventListener('click', () => {
	const loginUserInfo = document.querySelector('.login-user-info');
	const loginPassword = document.querySelector('.login-password');

	if (loginUserInfo.value === 'welcome@paws.com' && loginPassword.value === 'connect') {
		loginPage.style.display = 'none';
		newsFeedPage.style.display = 'block';
	} else {
		loginModal.style.display = 'block';
	}
});

// ****************** FEEDS PAGE: POST MODAL ***********************//
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const postBtn = document.querySelector('.post-btn');
postBtn.addEventListener('click', () => {
	modal.style.display = 'block';
	modalWrapper.classList.add('modal-wrapper-display');
});

const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const changeOpacity = x => {
	modalPostBtn.style.opacity = x;
	modalFooterPlus.style.opacity = x;
};

const postModalX = document.querySelector('.modal-header i');
const modalInput = document.querySelector('.modal-input');
postModalX.addEventListener('click', () => {
	modal.style.display = 'none';
	modalWrapper.classList.remove('modal-wrapper-display');
	if (modalInput.value !== '') {
		modalInput.value = '';
		changeOpacity(0.5);
	}
});

modalInput.addEventListener('keypress', e => {
	if (e.target.value !== '') {
		changeOpacity(1);
	}
});

modalInput.addEventListener('blur', e => {
	if (e.target.value === '') {
		changeOpacity(0.5);
	}
});

// ****************** SIDEBAR ***************************//
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
user.addEventListener('click', () => {
	sidebar.classList.add('sidebar-display');
	sidebarWrapper.classList.add('sidebar-wrapper-display');
});

const xBtn = document.querySelector('.sidebar-header i');
xBtn.addEventListener('click', () => {
	sidebar.classList.remove('sidebar-display');
	sidebarWrapper.classList.remove('sidebar-wrapper-display');
});


// ******************** DARK MODE *************************//
const darkElements1 = document.querySelectorAll('.dark-mode-1');
const darkElements2 = document.querySelectorAll('.dark-mode-2');
const lightTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

const toggle = document.querySelector('.toggle');
const circle = document.querySelector('.circle');
const dark = document.querySelector('#dark');
toggle.addEventListener('click', () => {
	circle.classList.toggle('move');
	dark.textContent = (dark.textContent === "Light") ? "Dark" : "Light";
	Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle('dark-1'));
	Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle('dark-2'));
	Array.from(lightTexts).map(lightText => lightText.classList.toggle('light'));
	Array.from(borders).map(border => border.classList.toggle('border-color'));
});
