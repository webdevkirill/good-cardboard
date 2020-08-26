	$('.header-contacts__button, .map-button, .products-button').on('click', function(){

		$('.overlay').show();
	});

	$('.cl-in-btn').on('click', function() {
		$('.js-tel').val('');
	});
	

	$('.popup-close').on('click', function(){
		$('.overlay').hide();
		$('.success').hide();
	});

	var bool = false;

	$('.header-button').on('click', function(){
		if (bool == false) {
			$('.nav').show();
			bool = true;
			$('.header').css('padding-top', '73px');
		}
		else {
			$('.nav').hide();
			bool = false;
			$('.header').css('padding-top', '15px');
		};
	});

	$('.nav-link').on('click', function(){
		$('.nav').hide();
		$('.header').css('padding-top', '15px');
		bool = false;
	});

	$('.nav-close').on('click', function(){
		$('.nav').hide();
		bool = false;
		$('.header').css('padding-top', '15px');
	});