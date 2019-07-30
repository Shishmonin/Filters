$('.btn-first-screen').click(function(){
	$('.popup-first-screen').addClass('active');

	$('.icon-button').click(function(){
		$('.popup-first-screen').removeClass('active');
	});
});

$('.btn-profit').click(function(){
	$('.popup-profit').addClass('active');

	$('.icon-button').click(function(){
		$('.popup-profit').removeClass('active');
	});
});

$('.btn-application-area').click(function(){
	$('.popup-area').addClass('active');

	$('.icon-button').click(function(){
		$('.popup-area').removeClass('active');
	});
});

$('#menu_checkbox').click(function(){
	$('.popup-menu').addClass('active');

	$('#menu_checkbox').click(function(){
		$('.popup-menu').removeClass('active');
	});
});


// СЛАЙДЕР С БЛАГОРСТВЕННЫЙМИ ПИСЬМАМИ
$(document).ready(function(){
  $('.my-slider').slick({
		infinite: true,
		slidesToShow: 1,
		// prevArrow: $('.prev'),
		// nextArrow: $('.next'),
		dots: true
  });
});
// АНИМИЦИЯ ПОЯВЛЕНИЯ ПРИ СКРОЛЕ
sal();
// ОБЛАСТЬ ПРИМЕНЕНИЯ АККОРДИОН НА МОБИЛКЕ
$(document).ready(function(){
	$( "#accordion" ).accordion({
		heightStyle: "content",
		collapsible: true,
		active: false
	});
});
// ОБЛАСТЬ ПРИМЕНЕНИЯ ТАБЫ НА ДЕКСТОПЕ
$(document).on("click", ".naccs .menu div", function() {
	var numberIndex = $(this).index();

	if (!$(this).is("active")) {
		$(".naccs .menu div").removeClass("active");
		$(".naccs ul li").removeClass("active");

		$(this).addClass("active");
		$(".naccs ul").find("li:eq(" + numberIndex + ")").addClass("active");

		var listItemHeight = $(".naccs ul")
			.find("li:eq(" + numberIndex + ")")
			.innerHeight();
		$(".naccs ul").height(listItemHeight + "px");
	}
});
// ВСПЛЫВАЮЩАЯ ФОРМА ЗАЯВКИ ОКОЛО ФУТЕРА
const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modal-button");
const closeButton = document.querySelector(".close-button");

let isOpened = false;

const openModal = () => {
  modal.classList.add("is-open");
  // body.style.overflow = "hidden";
};

const closeModal = () => {
  modal.classList.remove("is-open");
  // body.style.overflow = "initial";
};
modalButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

document.onkeydown = evt => {
  evt = evt || window.event;
  evt.keyCode === 27 ? closeModal() : false;
};

