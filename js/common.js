$(document).ready(function () {
	$('.articles__items').slick({
		infinite: true,
		slidesToShow: 3,
		customPaging: 50,
		slidesToScroll: 1,
		responsive: [
			// {
			//     breakpoint: 1024,
			//     settings: {
			//         slidesToShow: 3
			//     }
			// },
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});
});