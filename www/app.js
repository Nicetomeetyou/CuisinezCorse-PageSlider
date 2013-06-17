window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="scroller">' +
			
           '<div class="tac trame-dark">' +
				'<div class="space10"></div>'+
				'<div class="color-brown-title font-regular size20">Les recettes du mois</div>'+
				'<div class="space10"></div>'+
				'<div class="home-device">' +
					'<div class="swiper-main">' +
						'<div class="swiper-container swiper1">' +
							'<div class="swiper-wrapper">' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/img-recette.jpg"> ' +
										'<div class="space-before-text"> ' +
											'<div class="color-brown-title font-regular size20 tal">Titre recette</div>' +
											'<div class="color-grey-title font-regular size12 tal">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>' +
										'</div>' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/img-recette.jpg"> ' +
										'<div class="space-before-text"> ' +
											'<div class="color-brown-title font-regular size20 tal">Titre recette</div>' +
											'<div class="color-grey-title font-regular size12 tal">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>' +
										'</div>' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/img-recette.jpg"> ' +
										'<div class="space-before-text"> ' +
											'<div class="color-brown-title font-regular size20 tal">Titre recette</div>' +
											'<div class="color-grey-title font-regular size12 tal">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>' +
										'</div>' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/img-recette.jpg"> ' +
										'<div class="space-before-text"> ' +
											'<div class="color-brown-title font-regular size20 tal">Titre recette</div>' +
											'<div class="color-grey-title font-regular size12 tal">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>' +
										'</div>' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/img-recette.jpg"> ' +
										'<div class="space-before-text"> ' +
											'<div class="color-brown-title font-regular size20 tal">Titre recette</div>' +
											'<div class="color-grey-title font-regular size12 tal">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </div>' +
										'</div>' +
									'</a>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
					'<div class="space10"></div>'+
					'<div class="pagination pagination1"></div>' +
				'</div>' +
				'<div class="space10"></div>'+
			'</div>' +
			'<div class="tac trame-light">' +
				'<div class="space20"></div>'+
				'<div class="color-brown-title font-regular size20">Les recettes les plus populaires</div>'+
				'<div class="space10"></div>'+
				'<div class="home-device">' +
					'<div class="swiper-main">' +
						'<div class="swiper-container swiper-loop">' +
							'<div class="swiper-wrapper">' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/exemple2.png"> ' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/exemple2.png"> ' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/exemple2.png"> ' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/exemple2.png"> ' +
									'</a>' +
								'</div>' +
								'<div class="swiper-slide"> ' +
									'<a class="" href="">' +
										'<img class="width100" src="img/exemple2.png"> ' +
									'</a>' +
								'</div>' +
							'</div>' +
						'</div>' +
					'</div>' +
				'</div>' +
			'</div>' +
			
        '</div>' +
    '</div>';

var detailsPage =
    '<div>' +
        '<div class="header"><a href="#" class="btn">Back</a><h1>Robot</h1></div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>';


var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = merge(detailsPage, {img: "buildbot.jpg", name: "Build Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {img: "medibot.jpg", name: "Medi Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {img: "ripplebot.jpg", name: "Ripple Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    }
    else {
        page = homePage;
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();