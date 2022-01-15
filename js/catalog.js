document.querySelector('.selection-filter').addEventListener('click', function () {
	document.querySelector('.wrapper-filters').classList.add('active');
	document.querySelector("html").classList.add("lock");
})

document.querySelector('.catalog-filters__cross').addEventListener('click', function () {
	document.querySelector('.wrapper-filters').classList.remove('active');
	document.querySelector("html").classList.remove("lock");
})


window.addEventListener('click', function(event){
	if (event.target == document.querySelector('.wrapper-filters')) {
		document.querySelector('.wrapper-filters').classList.remove('active');
		document.querySelector("html").classList.remove("lock");
	}
})

document.querySelector('.history-brand__more').addEventListener('click', function () {
	document.querySelector(".history-brand__addid").classList.toggle("show");
})



$(".history-brand__info").each(function() {
    let more = $(this).find(".history-brand__more");
    let hide = $(this).find(".history-brand__addid");
    hide.hide();
	more.click(function() {
        hide.slideToggle();
    });
});