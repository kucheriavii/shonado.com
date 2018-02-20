(function() {
	'use strict';

	/* Инициализация скриптов */
	$(function() {

		/* Выпадение меню в шапке при наведение на блок "О компании" */
		$(function() {
			$('.header__about').hover(function() {
				$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
				$(this).find('.header__about-hover').addClass('active');
			}, function() {
				$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
				$(this).find('.header__about-hover').removeClass('active');
			});
		});

		/* Выпадение меню в шапке при наведение на блок с телефонами */
		$(function() {
			$('.header__phone').hover(function() {
				$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
				$(this).find('.header__phone-hover').addClass('active');
			}, function() {
				$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
				$(this).find('.header__phone-hover').removeClass('active');
			});
		});

		/* Счетчик в корзине */
		$(function() {
			$(document).on('click', '.header__cart-counter a', function(e) {
				let qnt = parseInt($(this).siblings('.qnt').html());

				e.preventDefault();

				if ($(this).hasClass('header__cart-minus')) {
					if (qnt > 1) {
						qnt--;
					}
				} else if ($(this).hasClass('header__cart-plus')) {
					qnt++;
				}

				$(this).siblings('.qnt').html(qnt);
			});
		});

		/* Счетчик в модальном окне */
		$(function() {
			$(document).on('click', '.add-to-cart__cart-counter a', function(e) {
				let qnt = parseInt($(this).siblings('.qnt').html());

				e.preventDefault();

				if ($(this).hasClass('add-to-cart__cart-minus')) {
					if (qnt > 1) {
						qnt--;
					}
				} else if ($(this).hasClass('add-to-cart__cart-plus')) {
					qnt++;
				}

				$(this).siblings('.qnt').html(qnt);
			});
		});

		/* Работа табов в выпадающем меню */
		$(function() {
			$(document).on('click', '.header__hover-list-item > a', function(e) {
				let tabId = $(this).parent().attr('data-tab');

				e.preventDefault();

				$(this).closest('.header__hover-list').find('.header__hover-list-item.active').removeClass('active');
				$(this).closest('.header__bottom-hover-menu').find('.header__hover-tab.active').removeClass('active');

				$(this).parent().addClass('active');
				$('.header__hover-tab[data-tab="' + tabId + '"]').addClass('active');
			});
		});

		/* Открытие мобильного меню на мобильном */
		$(document).on('click', '.header__mobile-toggle', function(e) {
			let mobileMenuInner = $('.header__mobile-menu-inner');
			e.preventDefault();

			if ($('.header__cart-hover').hasClass('active')) {
				$('.header__cart-hover.active, .overlay.active').removeClass('active');
			}
			$('.header__mobile-menu-wrap').slideToggle();
			$('.overlay').toggleClass('active');

			if (mobileMenuInner.attr('style') !== '') {
				mobileMenuInner.attr('style', '');
			}
		});

		/* Работа табов в модальном окне */
		$(function() {
			$(document).on('click', '.sign__tab > a', function(e) {
				let tabId = $(this).parent().attr('data-tab');

				e.preventDefault();

				$(this).closest('.modal__inner').find('.sign__tab.active').removeClass('active');
				$(this).parent().addClass('active');

				$(this).closest('.modal__inner').find('.sign__tab-content.active').removeClass('active');
				$(this).closest('.modal__inner').find('.sign__tab-content[data-tab="' + tabId + '"]').addClass('active');
			})
		});

		/* Маска для телефона в модальном окне регистрации */
		$('input[data-phone-input]').inputmask({
			mask           : "+38 (999) 999-99-99",
			showMaskOnHover: false,
			showMaskOnFocus: false
		});

		/* Возврат с подменю первого уровня к меню на планшете*/
		$(function() {
			$(document).on('click', '.header__hover-left .header__hover-menu-back > a', function(e) {
				e.preventDefault();

				$(this).closest('.header__bottom-hover-menu').removeClass('active');

			});
		});

		/* Возврат с подменю второго уровня к подменю первого на планшете*/
		$(function() {
			$(document).on('click', '.header__hover-right .header__hover-menu-back > a', function(e) {
				e.preventDefault();

				$(this).closest('.header__hover-right').removeClass('active');

			});
		});

		/* Активация поиска в шапке на планшете */
		$(function() {
			$(document).on('click', '.header__action-link.search > a', function(e) {
				let headerSearch = $('.header__search');

				e.preventDefault();

				if (headerSearch.hasClass('visible')) {
					headerSearch.removeClass('visible');
					$('.header__search > input').blur();
				} else {
					headerSearch.addClass('visible');
					$('.header__search > input').focus();
				}

			})
		});

		/* Активация поиска на мобильном */
		$(function() {
			$(document).on('click', '.header__mobile-btn.search > a', function(e) {

				e.preventDefault();

				$('.header__search').removeClass('active');
				$('.header__search > input').val('');
				$('.header__mobile-search').slideToggle();
			});
		});

		/* Открытие "О компании" в меню на мобильном */
		$(function() {
			$(document).on('click', '.header__mobile-about > a', function(e) {
				e.preventDefault();

				$('.header__mobile-about-wrap').slideToggle()
			});
		});

		/* Работа табов продуктов */
		$(function() {
			$(document).on('click', '.products__tabs-item > a', function(e) {
				let tabId = $(this).attr('data-tab');

				e.preventDefault();

				$(this).closest('.products__tabs').find('.active').removeClass('active');
				$(this).closest('.products__tabs').find('a[data-tab="' + tabId + '"]').parent().addClass('active');

				$(this).closest('.products__tabs-wrap').siblings('.products__tabs-content').find('.products__tab.active').removeClass('active');
				$(this).closest('.products__tabs-wrap').siblings('.products__tabs-content').find('.products__tab[data-tab="' + tabId + '"]').addClass('active');
			})
		});

		/* Инициализация слайдера продуктов */
		$('.products__tab-slider:not(.brand-page)').slick({
			slidesToShow  : 5,
			slidesToScroll: 1,
			arrows        : true,
			dots          : true,
			infinite      : false,
			prevArrow     : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
			nextArrow     : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
			responsive    : [
				{
					breakpoint: 1661,
					settings  : {
						slidesToShow  : 4,
						slidesToScroll: 1,
						arrows        : true,
						dots          : true,
						infinite      : false
					}
				},
				{
					breakpoint: 993,
					settings  : {
						slidesToShow  : 2,
						slidesToScroll: 1,
						dots          : true,
						arrows        : false
					}
				},
				{
					breakpoint: 641,
					settings  : {
						slidesToShow  : 1,
						slidesToScroll: 1,
						dots          : true,
						arrows        : false
					}
				}
			]
		});

		/* Выпадашка при клике на "добавить в корзину" */
		$(function() {
			$(document).on('click', '.products__tab-slide a.like, .product-card__btns .to-fav', function(e) {
				e.preventDefault();

				if ($(this).hasClass('active')) {
					$(this).removeClass('active');
				} else {
					$(this).addClass('active');
					$('.like__fade, .header__mobile-favorite').addClass('active');

					setTimeout(function() {
						$('.like__fade, .header__mobile-favorite').removeClass('active');
					}, 1500)
				}
			})
		});

		/* Инициализация слайдера блока advantages */
		$('.advantages__list').slick({
			slidesToShow: 3,
			responsive  : [
				{
					breakpoint: 993,
					settings  : {
						slidesToShow  : 1,
						slidesToScroll: 1,
						dots          : true,
						arrows        : false,
						infinite      : false
					}
				}
			]
		});

		/* Инициализация слайдера блока .tsn */
		$('.tsn__slider').slick({
			slidesToShow   : 1,
			slidesToScroll : 1,
			vertical       : true,
			verticalSwiping: true,
			dots           : true,
			arrow          : true,
			infinite       : false,
			prevArrow      : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="24px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
			nextArrow      : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="24px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
			responsive     : [
				{
					breakpoint: 993,
					settings  : {
						slidesToShow   : 1,
						slidesToScroll : 1,
						dots           : true,
						arrows         : false,
						infinite       : false,
						vertical       : false,
						verticalSwiping: false
					}
				}
			]
		});

		/* Инициализация слайдера SEO */
		$('.SEO__slider').slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows        : true,
			dots          : true,
			infinite      : false,
			prevArrow     : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
			nextArrow     : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
			responsive    : [
				{
					breakpoint: 993,
					settings  : {
						slidesToShow  : 1,
						slidesToScroll: 1,
						dots          : true,
						arrows        : false
					}
				}
			]
		});

		/* Fancybox параметры */
		$(function() {
			$(document).on('click', '[data-fancybox]', function() {
				let fancyboxContent = $('.fancybox-content');
				let leftPos = fancyboxContent.offset().left;
				let width = fancyboxContent.width();
				let topPos = fancyboxContent.offset().top - $(window).scrollTop();

				$('.fancybox-toolbar').css('left', leftPos + width).css('top', topPos);
			});

		});

		/* Выпадашки на странице FAQ */
		$(function() {
			$(document).on('click', '.faq__item-top', function(e) {
				e.preventDefault();

				if (!$(this).hasClass('active')) {
					$('.faq__item-top').removeClass('active');
					$('.faq__item-bottom').slideUp();
					$(this).addClass('active');
					$(this).siblings('.faq__item-bottom').slideDown();
				} else {
					$(this).removeClass('active');
					$(this).siblings('.faq__item-bottom').slideUp();
				}
			})
		});

		/* Резиновый textarea */
		autosize($('textarea'));

		/* Работа табов на странице бренда */
		$(function() {
			$(document).on('click', '.video__list-item', function(e) {
				let tabId = $(this).attr('data-tab');

				e.preventDefault();

				$('.video__list-item.active').removeClass('active');
				$('.video__tab.active').removeClass('active');

				$(this).addClass('active');
				$('.video__tab[data-tab="' + tabId + '"]').addClass('active');
			})
		});

		/* обрезка названия предмета в то шо надо */
		$('.tsn__slide-title').ellipsis({
			row: 2
		});

		/*range slider а странице listing desktop*/
		$('.sum-range').jRange({
			from         : 0,
			to           : 99998,
			step         : 50,
			showLabels   : false,
			isRange      : true,
			onstatechange: function() {
				$('.listing__options-price .range .show').addClass('active');
			},
			ondragend    : function() {
				let minDesktop = $('.pointer-label.low').html();
				let maxDesktop = $('.pointer-label.high').html();

				let addSpaceMinDesktop = minDesktop.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');
				let addSpaceMaxDesktop = maxDesktop.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' ');

				$('input.min-price').val(addSpaceMinDesktop);

				if (addSpaceMaxDesktop === '100 000') {
					addSpaceMaxDesktop = '99 999'
				}

				$('input.max-price').val(addSpaceMaxDesktop);

				$('.listing__options-price .range .show').removeClass('active');
			}
		});

		/* Ввод цены в инпут и ввод на слайдере */
		$(function() {
			$(document).on('keyup', '.listing__options-price', function() {
				let minPrice = parseInt($('input[name="min-price"]').val().replace(/\s+/g, ''));
				let maxPrice = parseInt($('input[name="max-price"]').val().replace(/\s+/g, ''));

				$('.sum-range').jRange('updateRange', '0, 99999', minPrice + ',' + maxPrice);
			});
		});

		/*  Страница listing работа фильтра*/
		$(function() {

			/* Клики по пунктам выбора категории товара*/
			$(document).on('click', '.listing__category-item svg', function() {

				$(this).siblings().addClass('active');
				$(this).parent().addClass('active');

				if ($(this).parent().siblings('.listing__subcategory').css('display') !== 'none' && $(this).parent().siblings().is('.listing__subcategory')) {
					$('.listing__subcategory').slideUp();
					$('.listing__category-item a.active').removeClass('active');
					$('.listing__category-item.level-2 > span.active').removeClass('active');
				} else {
					$('.listing__subcategory').slideUp();
					$(this).parent().siblings('.listing__subcategory').slideDown();
					$('.listing__category-item a.active').removeClass('active');
					$('.listing__category-item.level-2 > span.active').removeClass('active');

					$(this).siblings().addClass('active');
					$(this).parent().addClass('active');
				}
			});

			/*  Клики по пунктам фильтра*/
			$(document).on('click', '.listing__options-item a', function(e) {
				e.preventDefault();
				$(this).toggleClass('active');
				$(this).siblings('.listing__options-item-inner').slideToggle();
			});

			/* Удаление меток в фильтре по клике по тегам */
			$(document).on('click', '.listing__selected > a', function(e) {
				e.preventDefault();

				$(this).remove();

				if ($('.listing__selected a').length === 0) {
					$('.listing__options-item.select').fadeOut();
				}
			});

			/* Удаление всех меток разом */
			$(document).on('click', '.listing__options-item .clear', function(e) {
				e.preventDefault();

				$('.listing__selected a').remove();
				$('.listing__options-item.select').fadeOut();
			});
		});

		/* Выпадающий фильтр страницы listing на мобильном */
		$(function() {

			/*Клик по категории*/
			$(document).on('click', '.listing__mobile-category-item, .overlay', function(e) {
				e.preventDefault();

				if ($(e.target).hasClass('overlay')) {
					$('.listing__mobile-category-inner').slideUp();
					$('.listing__mobile-category-item, .listing__mobile-category, .overlay').removeClass('active');
				} else {

					$('.listing__mobile-options-inner').slideUp();
					$('.listing__mobile-options-item, .listing__mobile-options').removeClass('active');

					$('.listing__mobile-category-inner').slideToggle();
					$('.listing__mobile-category-item, .listing__mobile-category, .overlay').toggleClass('active');
				}
			});

			/*Клик по фильтру*/
			$(document).on('click', '.listing__mobile-options-item, .overlay', function(e) {
				e.preventDefault();

				if ($(e.target).hasClass('overlay')) {
					$('.listing__mobile-options-inner').slideUp();
					$('.listing__mobile-options-item, .listing__mobile-options, .overlay').removeClass('active');
				} else {
					$('.listing__mobile-category-inner').slideUp();
					$('.listing__mobile-category-item, .listing__mobile-category').removeClass('active');

					$('.listing__mobile-options-inner').slideToggle();
					$('.listing__mobile-options-item, .listing__mobile-options, .overlay').toggleClass('active');
				}
			})
		});

		/* Инициализация слайдера миниатюр в карте продукта */
		$('.product-card__thumbnails-slider').slick({
			slidesToShow  : 5,
			slidesToScroll: 1,
			arrows        : true,
			dots          : false,
			infinite      : false,
			vertical      : true,
			prevArrow     : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
			nextArrow     : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
			asNavFor      : '.product-card__slider',
			focusOnSelect : true,
			responsive    : [
				{
					breakpoint: 1661,
					settings  : {
						slidesToShow  : 5,
						slidesToScroll: 1,
						vertical      : false
					}
				},
				{
					breakpoint: 1151,
					settings  : {
						slidesToShow  : 4,
						slidesToScroll: 1,
						vertical      : false
					}
				},
				{
					breakpoint: 993,
					settings  : {
						slidesToShow  : 4,
						slidesToScroll: 1,
						vertical      : false
					}
				},
				{
					breakpoint: 621,
					settings  : {
						slidesToShow  : 3,
						slidesToScroll: 1,
						vertical      : false
					}
				},
				{
					breakpoint: 481,
					settings  : {
						slidesToShow  : 3,
						slidesToScroll: 1,
						vertical      : false
					}
				}
			]
		});

		/* Инициализация слайдера товара в карте продукта */
		$('.product-card__slider').slick({
			slidesToShow  : 1,
			slidesToScroll: 1,
			arrows        : false,
			dots          : false,
			infinite      : false,
			vertical      : false,
			asNavFor      : '.product-card__thumbnails-slider'
		});

		/* Работа табов на странице продукта десктоп*/
		$(function() {
			$(document).on('click', '.product-card__tabs-item > a', function(e) {
				let tabId = $(this).parent().attr('data-tab');

				e.preventDefault();

				$('.product-card__tabs-item.active').removeClass('active');
				$(this).parent().addClass('active');

				$('.product-card__tab.active').removeClass('active');
				$('.product-card__tab[data-tab="' + tabId + '"]').addClass('active');
			})
		});

		/* Работа аккордеона на странице продукта мобильный*/
		$(function() {
			$(document).on('click', '.product-card__tab a', function(e) {
				e.preventDefault();
				$(this).parent().toggleClass('active');
				$(this).siblings('.accordion__inner').slideToggle();
			})
		});

		/* Открыть скрытое описание на мобильном на странице карты товара*/
		$(function() {
			$(document).on('click', '.product-card__colors-inner .mobile-more', function(e) {

				e.preventDefault();
				$(this).closest('.product-card__colors-inner').toggleClass('show-more');
				$(this).toggleClass('active');
			})
		});

		/* Открыть скрытыте цвета на мобильном на странице карты товара*/
		$(function() {
			$(document).on('click', '.product-card__tab .mobile-more', function(e) {
				e.preventDefault();
				$(this).closest('.product-card__tab').addClass('show-more');
				$(this).fadeOut();
			})
		});

		/* Добавление пробела в ценовой интервал на search и listing */
		$(function() {
			/*Удаление пробела с поля ввода при фокусе*/
			$(document).on('focus', '.listing__options-price input', function() {
				let val = $(this).val();
				let newVal = val.replace(/\s+/g, '');

				$(this).val(newVal);
			});

			/* Ограничеие ввода только цифр и пробелов */
			$(document).on('keydown', '.listing__options-price input', function(e) {
				/*
				32 - пробел
				8 - backspace
				46 - delete
				37-40 - стрелки клавиатуры
				48-57 - 1-9 верх клавиатуры и ввод с тач устройства
				96-105 - 1-9 ввод с num-pad клавиатуры.
				*/
				if (!(e.keyCode === 32 || e.keyCode === 8 || e.keyCode === 46 || (e.keyCode >= 37 && e.keyCode <= 40) || (e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))) {
					return false;
				}

			});

			/*Добавление пробела в поле ввода при потере фокуса*/
			$(document).on('blur change', '.listing__options-price input', function() {
				let a = $(this).val();
				a.toString();

				$(this).val(a.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + ' '))
			});
		});

		/* Счетчик на заглушке*/
		(function() {
			var countdown = (function(args) {
				'use strict';

				function _timer(el) {
					var time;
					if (el.dataset.time == undefined) {
						time = Date.parse(new Date()) + 3600 * 1000 * 24 * 5; //5 days
					}
					else if (el.dataset.time == '2days') {
						time = Date.parse(new Date()) + 3600 * 1000 * 24 * (2.4); //2 days
					}
					else if (el.dataset.time == '40min') {
						time = Date.parse(new Date()) + 40 * 60 * 1000; //40 min
					}
					else {
						time = Date.parse(el.dataset.time);
					}
					return time;
				};

				function _counter(time, el) {
					var amount = +time - Date.parse(new Date()),
						day = Math.floor(amount / 86400000),
						hours = Math.floor((amount / 3600000) % 24),
						mins = Math.floor((amount / 60000) % 60),
						mins = Math.floor(new Date(amount).getMinutes()),
						secs = Math.floor(new Date(amount).getSeconds());
					var b = String(Math.floor(day)).split("");
					var days = Math.floor(day) < 10 ? "<span>0</span>" : '';
					for (var i = 0; i in b; i++) {
						days += '<span>' + b[i] + '</span>';
					}

					var round = '<div class="round"><span>:</span></div>';

					var daysDiv = '<div id="days">' + days + '<span class="days-name"> дней </span></div>' + round,
						hoursDiv = '<div id="hours">' + '<span>' + Math.floor(hours / 10) + '</span><span>' + hours % 10 + '</span><span class="days-name">часов</span>' + '</div>' + round,
						minsDiv = '<div id="mins">' + '<span>' + Math.floor(mins / 10) + '</span><span>' + mins % 10 + '</span><span class="days-name">минут</span>' + '</div>' + round,
						secsDiv = '<div id="secs">' + '<span>' + Math.floor(secs / 10) + '</span><span>' + secs % 10 + '</span><span class="days-name">секунд</span>' + '</div>';

					if (amount < 0) {
						var zero = '<span>' + 0 + '</span><span>' + 0 + '</span>';
						daysDiv = '<div id="days">' + zero + '</div>' + round,
							hoursDiv = '<div id="hours">' + zero + '</div>' + round,
							minsDiv = '<div id="mins">' + zero + '</div>' + round,
							secsDiv = '<div id="secs">' + zero + '</div>';
					}
					var out = daysDiv + hoursDiv + minsDiv + secsDiv;
					el.innerHTML = out;
				}

				function _parseElements(elements) {
					[].forEach.call(elements, function(el) {
						var time = _timer(el);
						_counter(time, el);
						var interval = setInterval(function() {
							_counter(time, el);
						}, 1000);
						return interval;

					});
				}

				return {
					init: function(elements) {
						try {
							if (elements === undefined) {
								throw new SyntaxError("Items are not found");
							}
							if (typeof(elements) !== "object") {
								throw new SyntaxError("Wrong item");
							}
							if (arguments.length > 1) {
								throw new SyntaxError("Enter not more than one element");
							}
							return _parseElements(elements);
						} catch (err) {
						}
					}
				}
			})();

			var items = $('.countdown__inner');
			countdown.init(items);
		})();

		/* Выпадение мобильного меню */
		$(function() {
			$(document).on('click', '.header__catalog > a', function(e) {
				if (window.innerWidth < 1150) {

					e.preventDefault();

					$('.header__bottom-hover-menu.active').removeClass('active');
					$('.header__hover-right.active').removeClass('active');

					$('.overlay').toggleClass('active');
					$('.header__bottom').fadeToggle();
				}
			})
		});

		/* Инициализация салйдера в аккордеоне бренда */
		$(function() {
			$('.brand-accordion__slider').slick({
				slidesToShow  : 1,
				slidesToScroll: 1,
				arrows        : true,
				dots          : false,
				infinite      : false,
				prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
				nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>'
			})
		});

		/* Аккордеон evomacs */
		$(function() {
			$(document).on('click', '.brand-accordion__item-title', function(e) {

				let tabId = $(this).attr('data-tab');

				e.preventDefault();

				if ($(this).hasClass('active')) {
					return false;
				} else {
					$('.brand-accordion__item-title, .brand-accordion__item-content, .brand-accordion__image').removeClass('active');
					$('.brand-accordion__item-content').slideUp();
					$(this).addClass('active');
					$(this).siblings('.brand-accordion__item-content').slideDown();
					$('.brand-accordion__image[data-tab="' + tabId + '"]').addClass('active');
				}
			});
		});

		// /* Запуск видео в превью товара */
		// $(function() {
		// 	let video = document.getElementById('video-preview');
		//
		// 	$(document).on('click', '.brand-page__preview-inner .play-icon', function () {
		// 		if(!$(this).hasClass('active')) {
		// 			$(this).addClass('active');
		// 			$('.brand-page__preview-video').addClass('active');
		// 			// document.querySelector('ytp-large-play-button').onclick()
		// 			$('.ytp-large-play-button').click()
		// 		} else {
		// 			$(this).removeClass('active');
		// 			$('.brand-page__preview-video').removeClass('active');
		// 			$('.ytp-play-button').click();
		// 		}
		// 	});
		// });

		/* Инициализация wow js */
		new WOW().init();

		/* Отрытие доп категорий в брендах */
		$(function() {
			$(document).on('click', '.brand-category__all.for-show', function(e) {
				e.preventDefault();

				$(this).fadeOut();
				$(this).siblings('.brand-category__list.hidden').addClass('active');
			});
		});
        /* Отрытие доп категорий в xiaomi */
        /*kucheriavii*/
        $(function() {
            $(document).on('click', '.brand-category__all.plate-show', function(e) {
                e.preventDefault();

                $(this).fadeOut();
                $(this).siblings('div.hidden').removeClass('hidden');
            });
        });
        /*/kucheriavii/*/

		/* Смена цветовой палитры модели brand slider */
		$(function() {
			$(document).on('click', '.brand-page__models-select-btn', function(e) {

				let tabId = $(this).attr('data-tab');

				e.preventDefault();

				$('.brand-page__models-select-btn, .brand-page__models-select').removeClass('active');
				$(this).addClass('active');
				$('.brand-page__models-select[data-tab="' + tabId + '"]').addClass('active');
			});
		});

		/* Инициализация слайдера yunmai catalog */
		$(function() {
			let yunmaiCatalogSlider = $('.yunmai-catalog__list');

			yunmaiCatalogSlider.slick({
				slidesToShow  : 4,
				slidesToScroll: 1,
				arrows        : true,
				dots          : false,
				infinite      : true,
				prevArrow     : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="50px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
				nextArrow     : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="50px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
				responsive    : [
					{
						breakpoint: 993,
						settings  : {
							slidesToShow  : 2,
							slidesToScroll: 1,
							arrows        : false,
							dots          : true,
							infinite      : true,
							asNavFor      : '.yunmai-catalog__list-thumbnail',
						}
					},
					{
						breakpoint: 701,
						settings  : {
							slidesToShow  : 1,
							adaptiveHeight: true
						}
					}
				]
			});
		});
	});

	/* Работа скриптов после загрузки документа */
	$(window).on("load", function() {
		/* Кастмоный скролл в результатах поиска  */
		$(".header__result-list-wrapper").mCustomScrollbar();

		/* Кастмоный скролл в корзине при наведении  */
		$(".header__cart-top").mCustomScrollbar();

		/* Кастмоный скролл на странице бренда в видео  */
		$(".video__list").mCustomScrollbar();

		/* Закрытые табы на product-card если ширина экрана меньше 992 */
		$(function() {
			if ($(window).width() < 993) {
				$('.product-card__tab.active').removeClass('active');
			}
		});
	});

	/* Работа скриптов после загрузки документа и ресайза */
	$(window).on("load resize", function() {

		/* Активация поиска в шапке */
		$(function() {
			if ($(window).width() > 1150) {
				$('.header__search').mouseleave(function() {
					$(this).removeClass('active');
					$('.overlay').removeClass('active');
					$(this).find('input').blur();
				})
			}

			if ($(window).width() > 992) {
				$(document).on('focus', '.header__search', function() {
					$(this).addClass('active');
					$('.overlay').addClass('active');
				}).on('blur', '.header__search', function() {
					$(this).removeClass('active');
					$('.overlay').removeClass('active');
				});
			}

			if ($(window).width() < 993) {
				$(document).on('focus', '.header__search', function() {
					$(this).addClass('active');
				});
			}
		});

		/* Выпадение корзины при наведении на десктопе и клик на тач устройствах */
		$(function() {
			if (window.innerWidth > 1150) {

				$('.header__action-link.cart').hover(function() {
					$(this).find('.header__cart-hover').addClass('active');
					$('.overlay').addClass('active');
				}, function() {
					$(this).find('.header__cart-hover').removeClass('active');
					$('.overlay').removeClass('active');
				});

			} else {

				$('.header__action-link.cart').click(function(e) {
					let overlay = $('overlay'),
						mobMenuWrap = $('.header__mobile-menu-wrap');

					e.preventDefault();

					if (mobMenuWrap.css('display') !== 'none') {
						mobMenuWrap.slideUp();
						$('.header__mobile-search').slideUp();
						overlay.removeClass('active');
					}
					$(this).find('.header__cart-hover').toggleClass('active');
					overlay.toggleClass('active');
				});
			}
		});

		/* Инициализация слайдера .banner на десктопе */
		$(function() {
			let bannerSliderDesktop = $('.banner__slider');

			if (window.innerWidth >= 993 && !bannerSliderDesktop.hasClass('slick-initialized')) {
				bannerSliderDesktop.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : true,
					dots          : true,
					infinite      : false,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>'
				});
			} else if (window.innerWidth < 993 && bannerSliderDesktop.hasClass('slick-initialized')) {
				bannerSliderDesktop.slick('unslick');
			}
		});

		/* Инициализация слайдера .banner на мобильном */
		$(function() {

			let bannerSlideMobile = $('.banner__mobile-slider');

			if (window.innerWidth < 993 && !bannerSlideMobile.hasClass('slick-initialized')) {
				bannerSlideMobile.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true,
					infinite      : false
				});
			} else if (window.innerWidth >= 993 && bannerSlideMobile.hasClass('slick-initialized')) {
				bannerSlideMobile.slick('unslick');
			}
		});

		/* Выранвивание стрелок и дотсов слайдера banner */
		$(function() {

			if (window.innerWidth > 992 && !$('body').hasClass('cap-page')) {

				let bannerContainerLeftPos = $('.header .container').offset().left;

				$('.banner .arrow-prev').css('left', bannerContainerLeftPos + 25);
				$('.banner .arrow-next').css('right', bannerContainerLeftPos + 25);
				$('.banner .slick-dots').css('right', bannerContainerLeftPos + 25);
			} else {
				$('.banner .slick-dots').attr('style', '');
			}
		});

		/* Выравнивание мобильного выпадающего меню */
		$(function() {
			if (!$('body').hasClass('cap-page')) {
				let catalogLeft = $('.header__catalog a').offset().left;

				$('.header__mobile-menu-wrap').css('left', -catalogLeft);
			}
		});

		/* Выпадение меню "О компании" в подвале при наведение */
		$(function() {
			if (window.innerWidth > 993) {
				$('.footer__about').hover(function() {
					$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
					$(this).find('.footer__about-hover').addClass('active');
				}, function() {
					$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
					$(this).find('.footer__about-hover').removeClass('active');
				});
			} else {
				$('.footer__about-hover').removeClass('active');
				$('.footer__about span.active').removeClass('active').siblings('span').addClass('active');
			}

		});

		/* Выпадение меню "Телефон" в подвале при наведение */
		$(function() {
			if (window.innerWidth > 993) {
				$('.footer__phone-mob').hover(function() {
					$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
					$(this).find('.footer__phone-hover').addClass('active');
				}, function() {
					$(this).find('a span.active').removeClass('active').siblings('span').addClass('active');
					$(this).find('.footer__phone-hover').removeClass('active');
				});
			} else {
				$('.footer__phone-hover').removeClass('active');
				$('.footer__phone span.active').removeClass('active').siblings('span').addClass('active');
			}
		});

		$('.header__mobile-menu-wrap, .header__mobile-list').css('max-width', $(window).width());

		/* Поведение контента слайдера банера на странице бренда*/
		$(function() {
			if (window.innerWidth > 992 && window.innerWidth <= 1150 && $('.banner').hasClass('brand')) {
				let logoPos = $('.header__top .header__logo').offset().left;

				$('.banner__content').css('left', logoPos + 20);
				$('.banner .arrow').css('display', 'none');
				$('.banner .slick-dots').css('left', logoPos + 20);
				$('.banner .slick-dots li').addClass('dark');
			} else {
				$('.banner__content').attr('style', '');
				$('.banner .arrow').attr('style', '');
				$('.banner .slick-dots').attr('style', '');
				$('.banner .slick-dots li').removeClass('dark');
			}
		});

		/* Инициализация слайдера .video на мобильном */
		$(function() {
			let videoSliderMobile = $('.video__mobile-slider');

			if (window.innerWidth < 993 && !videoSliderMobile.hasClass('slick-initialized')) {
				videoSliderMobile.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true,
					infinite      : false
				});
			} else if (window.innerWidth > 992 && videoSliderMobile.hasClass('slick-initialized')) {
				videoSliderMobile.slick('unslick');
			}
		});

		/* Инициализация слайдера .articles на мобильном */
		$(function() {
			let articlesSliderMobile = $('.articles__list');

			if (window.innerWidth < 993 && !articlesSliderMobile.hasClass('slick-initialized')) {
				articlesSliderMobile.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					dots          : true,
					arrows        : false,
					infinite      : false
				});
			} else if (window.innerWidth > 992 && articlesSliderMobile.hasClass('slick-initialized')) {
				articlesSliderMobile.slick('unslick');
			}
		});

		/* обрезка названия предмета в то шо надо */
		$('.tsn__slide-title').ellipsis({
			row: 2
		});

		/* Инициализация слайдера .articles на мобильном */
		$(function() {

			$(document).on('click', '.tsn__mobile-more', function(e) {
				e.preventDefault();

				$(this).siblings('.tsn__product-descr').css('height', 'auto');
				$(this).css('display', 'none');
			});

			if (window.innerWidth > 992) {
				$('.tsn__product-descr').attr('style', '');
				$('.tsn__mobile-more').attr('style', '');
			}
		});

		/* Страница listing выравивание фильтра на мобильном */
		$(function() {
			let mobileFilter = $('.listing__left-mobile');

			if (window.innerWidth < 993) {
				mobileFilter.css('width', $(window).width());
			} else {
				mobileFilter.attr('style', '');
			}
		});

		/* обрезка названия выпадающего списка на мобильном страница listing */
		$('.listing__mobile-category-item span').ellipsis({
			row: 1
		});

		/* Инициализация слайдера подарка в карте продукта */
		$(function() {
			let giftSlider = $('.product-card__gift-slider');

			if ($(window).width() < 1151 && !giftSlider.hasClass('slick-initialized')) {
				giftSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : true,
					dots          : false,
					infinite      : true,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23px" height="34px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23px" height="34px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>'
				});
			} else if (window.innerWidth > 1150 && giftSlider.hasClass('slick-initialized')) {
				giftSlider.slick('unslick');
			}
		});

		/* Инициализация слайдера instagram в карте продукта на мобильном */
		$(function() {
			let instagramSlider = $('.product-card__instagram-slider');

			if ($(window).width() < 993 && !instagramSlider.hasClass('slick-initialized')) {
				instagramSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : false,
					infinite      : true,
					centerMode    : true,
					centerPadding : '80px',
					responsive    : [
						{
							breakpoint: 481,
							settings  : {
								slidesToShow  : 1,
								slidesToScroll: 1,
								arrows        : false,
								dots          : false,
								infinite      : true,
								centerMode    : true,
								centerPadding : '50px',
							}
						}
					]
				});
			} else if (window.innerWidth > 992 && instagramSlider.hasClass('slick-initialized')) {
				instagramSlider.slick('unslick');
			}
		});

		/* Отрытие таба product-card если экран больше 993 */
		$(function() {
			let activeTab = $('.product-card__tabs-item.active').attr('data-tab');

			if ($(window).width() > 992) {
				$('.accordion__inner').attr('style', '');

				$('.product-card__tab[data-tab="' + activeTab + '"]').addClass('active');
			}
		});

		/* Сброс стилей планшетного/мобильного меню при ресайзе более 1150 */
		$(function() {
			if ($(window).width() > 992 || $(window).width() > 1150) {
				$('.header__mobile-menu-wrap').attr('style', '');
				$('.overlay.active').removeClass('active');

				$('.header__bottom').attr('style', '');
				$('.header__bottom-hover-menu.active').removeClass('active');
				$('.header__hover-right.active').removeClass('active');
			}
		});

		/* Сброс стилей планшетного поиска при ресайзе менее 992 */
		if ($(window).width() < 993) {
			$('.header__search.visible').removeClass('visible');
		}

		/* Перенос корзины с десктопа в мобилку и наоборот */
		$(function() {
			if ($(window).width() > 992) {

				let mobCart = $('.header__mobile-top .header__cart-hover');

				if (mobCart.length > 0) {
					mobCart.appendTo($('.header__top .header__action-link.cart'));
				}
			} else {
				let deskCart = $('.header__top .header__cart-hover');

				if (deskCart.length > 0) {
					deskCart.appendTo($('.header__mobile-top .header__action-link.cart'));
				}
			}
		});

		/* Перенос меню с десктопа/планшета в мобильную версию и наоборот */
		$(function() {
			if ($(window).width() > 992) {

				let mobTSN = $('.header__mobile-list .header__logo-descr');
				let mobMenu = $('.header__mobile-list .header__nav');

				if (mobTSN.length > 0) {
					mobTSN.appendTo($('.header__bottom .container'));
				}

				if (mobMenu.length > 0) {
					mobMenu.appendTo($('.header__bottom .container'));
				}
			} else {
				let deskTSN = $('.header__bottom .header__logo-descr');
				let deskMenu = $('.header__bottom .header__nav');

				if (deskTSN.length > 0) {
					deskTSN.insertAfter($('.header__mobile-search'));
				}

				if (deskMenu.length > 0) {
					deskMenu.insertAfter($('.header__mobile-list .header__logo-descr'));
				}
			}
		});

		/* Перенос результатов поиска с десктопа в мобилку и наоборот */
		$(function() {
			if ($(window).width() > 992) {

				let mobSearchResult = $('.header__mobile-search .header__search .header__result');

				if (mobSearchResult.length > 0) {
					mobSearchResult.appendTo($('.header__top .header__search'));
				}
			} else {
				let deskSearchResult = $('.header__top .header__search .header__result');

				if (deskSearchResult.length > 0) {
					deskSearchResult.appendTo($('.header__mobile-search .header__search'));
				}
			}
		});

		/* Выпадение меню в шапке при наведение на ссылку */
		$(function() {

			$('.header__nav-item').hover(function() {
				if (window.innerWidth > 1150) {
					let overlay = $('.overlay');

					$('.header__bottom-hover-menu.active, .header__top, .header__bottom').removeClass('active');
					$('.header__nav-item > a.active').removeClass('active');
					overlay.removeClass('active');

					if ($(this).find('.header__bottom-hover-menu').length > 0) {
						$(this).find('a.submenu').addClass('active');
						$(this).find('.header__bottom-hover-menu').addClass('active');
						$('.header__top, .header__bottom').addClass('active');
						overlay.addClass('active');
					}
				}
			}, function() {
				if (window.innerWidth > 1150) {
					$('.header__bottom-hover-menu.active, .header__top, .header__bottom').removeClass('active');
					$('.overlay').removeClass('active');
					$('.header__nav-item > a.active').removeClass('active');

					$('.header__hover-list-item.active').removeClass('active');
					$('.header__hover-tab.active').removeClass('active');

					$('.header__hover-list-item[data-tab="1"]').addClass('active');
					$('.header__hover-tab[data-tab="1"]').addClass('active');
				}
			});

			// $('.header__nav-item > a').mouseover(function() {
			// 	if (window.innerWidth > 1150) {
			// 		let overlay = $('.overlay');
			//
			// 		$('.header__bottom-hover-menu.active, .header__top, .header__bottom').removeClass('active');
			// 		$('.header__nav-item > a.active').removeClass('active');
			// 		overlay.removeClass('active');
			//
			// 		if ($(this).siblings().is('div')) {
			// 			$(this).addClass('active');
			// 			$(this).siblings('.header__bottom-hover-menu').addClass('active');
			// 			$('.header__top, .header__bottom').addClass('active');
			// 			overlay.addClass('active');
			// 		}
			// 	}
			// });
			//
			// $('.header__nav-item').mouseleave(function() {
			// 	if (window.innerWidth > 1150) {
			// 		$('.header__bottom-hover-menu.active, .header__top, .header__bottom').removeClass('active');
			// 		$('.overlay').removeClass('active');
			// 		$('.header__nav-item > a.active').removeClass('active');
			//
			// 		$('.header__hover-list-item.active').removeClass('active');
			// 		$('.header__hover-tab.active').removeClass('active');
			//
			// 		$('.header__hover-list-item[data-tab="1"]').addClass('active');
			// 		$('.header__hover-tab[data-tab="1"]').addClass('active');
			// 	}
			// });

		});

		/* Открытие подменю первого уровня в шапке на планшете */
		$(function() {
			if ($(window).width() < 1151)
				$(document).on('click', '.header__nav-item > .submenu', function(e) {
					e.preventDefault();
					$(this).siblings('.header__bottom-hover-menu').addClass('active');
				});
		});

		/* Открытие подменю второго уровня в шапке на планшете */
		$(function() {
			if ($(window).width() < 1151)
				$(document).on('click', '.header__hover-list-item > a', function(e) {
					e.preventDefault();
					$(this).closest('.header__hover-left').siblings('.header__hover-right').addClass('active');
				});
		});

		$(function() {
			/* Открытие/закрытие "о компании" в подвале на мобильных */
			$(document).on('click', '.footer__about > a', function(e) {
				if (window.innerWidth < 993) {
					e.preventDefault();

					$('.footer__about-hover').slideToggle();
					$(this).find('span.active').removeClass('active').siblings('span').addClass('active');
				}
			})
		});

		/* Перенос фильтра страницы listing с десктопа/планшета в мобильную версию и наоборот */
		$(function() {
			if ($(window).width() > 992) {

				let mobCategories = $('.listing__mobile-category .listing__category-list');
				let mobOptions = $('.listing__mobile-options .listing__options-list');

				if (mobCategories.length > 0) {
					mobCategories.insertAfter($('.listing__left-desktop .listing__sidebar-title[data-title="category"]'));
				}

				if (mobOptions.length > 0) {
					mobOptions.insertAfter($('.listing__left-desktop .listing__sidebar-title[data-title="options"]'));
				}

			} else {
				let deskCategories = $('.listing__left-desktop .listing__category-list');
				let deskOptions = $('.listing__left-desktop .listing__options-list');

				if (deskCategories.length > 0) {
					deskCategories.appendTo($('.listing__mobile-category-inner'));
				}

				if (deskOptions.length > 0) {
					deskOptions.insertAfter($('.listing__mobile-options-inner .listing__right-top'));
				}
			}
		});

		/* Перенос overlay из блока в шапке на десктопе под подвал и наоборот */
		$(function() {
			if ($(window).width() > 1150) {

				let overlayMob = $('.footer + .overlay');

				if (overlayMob.length > 0) {
					overlayMob.insertAfter($('.header__bottom'));
				}

			} else {
				let overlay = $('.header__bottom + .overlay');

				if (overlay.length > 0) {
					overlay.insertAfter($('.footer'));
				}
			}
		});

		/* Добавление/удаление полосы справа от слайдера продуктов в зависимости от количества слайдов*/
		$('.products__tab-slider').each(function(i, elem) {

			let thisSlider = $('.products__tab-slider').eq(i);
			let slidesCount = thisSlider.find('.products__tab-slide').length;

			thisSlider.removeClass('full-slider');

			if ($(window).width() > 1661 && slidesCount > 4) {
				thisSlider.addClass('full-slider');
			}

			if ($(window).width() < 1661 && $(window).width() > 993 && slidesCount > 3) {
				thisSlider.addClass('full-slider');
			}

			if ($(window).width() < 993 && $(window).width() > 641 && slidesCount > 1) {
				thisSlider.addClass('full-slider');
			}

			if ($(window).width() < 641) {
				thisSlider.removeClass('full-slider');
			}
		});

		/* Инициализация слайдера brand */
		$(function() {

			let modelSlider = $('.brand-page__models-slider');
			let thumbnailSlider = $('.brand-page__models-thumbnail-slider');

			if (!modelSlider.hasClass('slick-initialized') && !modelSlider.hasClass('elari')) {
				modelSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : false,
					swipe         : false,
					asNavFor      : '.brand-page__models-thumbnail-slider',
					responsive    : [
						{
							breakpoint: 993,
							settings  : {
								asNavFor: null,
								dots    : true,
								swipe   : true
							}
						}
					]
				});
			}

			/* синхронный слайдер ecovacs */
			if (window.innerWidth >= 993 && !thumbnailSlider.hasClass('slick-initialized') && modelSlider.hasClass('ecovacs')) {
				thumbnailSlider.fadeIn();
				thumbnailSlider.slick({
					slidesToShow  : 5,
					slidesToScroll: 1,
					arrows        : true,
					dots          : false,
					asNavFor      : '.brand-page__models-slider',
					focusOnSelect : true,
					centerMode    : true,
					centerPadding : 0,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>',
					responsive    : [
						{
							breakpoint: 1151,
							settings  : {
								slidesToShow: 3
							}
						},
						{
							breakpoint: 993,
							settings  : {
								arrows: false
							}
						}
					]
				});
			} else if (window.innerWidth < 993 && thumbnailSlider.hasClass('slick-initialized')) {
				thumbnailSlider.slick('unslick');
				thumbnailSlider.fadeOut();
			}

			/*без второго слайдера*/
			if (!modelSlider.hasClass('slick-initialized') && modelSlider.hasClass('elari')) {
				modelSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : true,
					dots          : true,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>',
					responsive    : [
						{
							breakpoint: 993,
							settings  : {
								arrows: false
							}
						}
					]
				});
			}

			if (modelSlider.hasClass('elari')) {
				let firstDotDistance = modelSlider.find('.slick-dots li:nth-child(1)').offset().left;

				modelSlider.find('.arrow-prev').css('left', firstDotDistance - 40);
				modelSlider.find('.arrow-next').css('right', firstDotDistance - 40);
			}

			/* синхронный слайдер riva */
			$(function() {
				if (window.innerWidth >= 993 && !thumbnailSlider.hasClass('slick-initialized') && modelSlider.hasClass('riva') && !modelSlider.hasClass('elari')) {
					thumbnailSlider.fadeIn();
					thumbnailSlider.slick({
						slidesToShow  : 4,
						slidesToScroll: 1,
						arrows        : true,
						dots          : false,
						asNavFor      : '.brand-page__models-slider',
						focusOnSelect : true,
						prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
						nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>'
					});
				} else if (window.innerWidth < 993 && thumbnailSlider.hasClass('slick-initialized')) {
					thumbnailSlider.slick('unslick');
					thumbnailSlider.fadeOut();
				}
			});
		});

		/* Инициализация слайдеров about и awards ecovacs */
		$(function() {

			let textSliderMob = $('.brand-about__text');
			let awardsSliderMob = $('.brand-about__awards');
			let aboutListSlider = $('.brand-about__list-slider');

			if (window.innerWidth >= 993 && textSliderMob.hasClass('slick-initialized')) {
				textSliderMob.slick('unslick');
			} else if (window.innerWidth < 993 && !textSliderMob.hasClass('slick-initialized') && !textSliderMob.hasClass('no-slider')) {
				textSliderMob.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true
				});
			}

			if (window.innerWidth >= 993 && awardsSliderMob.hasClass('slick-initialized')) {
				awardsSliderMob.slick('unslick');
			} else if (window.innerWidth < 993 && !awardsSliderMob.hasClass('slick-initialized')) {
				awardsSliderMob.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true
				});
			}

			if (window.innerWidth >= 993 && aboutListSlider.hasClass('slick-initialized')) {
				aboutListSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !aboutListSlider.hasClass('slick-initialized')) {
				aboutListSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : true,
					dots          : true,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>',
					centerMode    : true,
					centerPadding : '180px',
					infinite      : true,
					focusOnSelect : true
				});
			}
		});

		/* Инициализация слайдера model страницы brand */
		$(function() {

			let modelLargeSlider = $('.brand-page__model-large');

			if (window.innerWidth >= 993 && !modelLargeSlider.hasClass('slick-initialized')) {
				modelLargeSlider.fadeIn();
				modelLargeSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : true,
					dots          : false,
					swipe         : true,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>'
				});
			} else if (window.innerWidth < 993 && modelLargeSlider.hasClass('slick-initialized')) {
				modelLargeSlider.slick('unslick');
				modelLargeSlider.fadeOut();
			}
		});

		/* Инициализация слайдера brand-description */
		$(function() {
			let descriptionSlider = $('.brand-description__slider');

			if (!descriptionSlider.hasClass('slick-initialized')) {
				descriptionSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : true,
					dots          : true,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#0e1019" points="17,0 0,18 17,37 9,18 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="17px" height="37px" viewBox="0 0 17 37" style="enable-background:new 0 0 17 37;" xml:space="preserve"><polygon fill="#fff" points="0,37 17,19 0,0 8,19 "/></svg></a>',
					responsive    : [
						{
							breakpoint: 993,
							settings  : {
								arrows: false
							}
						}
					]
				});
			}

			if (descriptionSlider.length > 0) {
				let firstDotDistance = descriptionSlider.find('.slick-dots li:nth-child(1)').offset().left;

				descriptionSlider.find('.arrow-prev').css('left', firstDotDistance - 40);
				descriptionSlider.find('.arrow-next').css('right', firstDotDistance - 40);
			}
		});

		/* Инициализация слайдера fixitime about */
		$(function() {
			let fixitimeAboutSlider = $('.brand-about-fixitime__bottom');

			if (window.innerWidth >= 993 && fixitimeAboutSlider.hasClass('slick-initialized')) {
				fixitimeAboutSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !fixitimeAboutSlider.hasClass('slick-initialized')) {
				fixitimeAboutSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true,
					centerMode    : true,
					centerPadding : '105px',
					infinite      : true,
					focusOnSelect : true
				});
			}
		});

		/* Инициализация слайдера riva about */
		$(function() {
			let rivaCapabilitiesSlider = $('.brand-capabilities__list');

			if (window.innerWidth >= 993 && rivaCapabilitiesSlider.hasClass('slick-initialized')) {
				rivaCapabilitiesSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !rivaCapabilitiesSlider.hasClass('slick-initialized')) {
				rivaCapabilitiesSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true,
					infinite      : true,
				});
			}
		});

		/* Инициализация слайдера polar about */
		$(function() {
			let polarAboutSlider = $('.brand-about-polar__bottom');

			if (window.innerWidth >= 993 && polarAboutSlider.hasClass('slick-initialized')) {
				polarAboutSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !polarAboutSlider.hasClass('slick-initialized')) {
				polarAboutSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true,
					infinite      : true,
				});
			}
		});

		/* Yunmai catalog выравнивание высоты блоков */
		$(function() {
			let maxHeight = 0;
			let yunmaiCatalogDescr = $('.yunmai-catalog__item-descr');

			yunmaiCatalogDescr.attr('style', '');

			if ($(window).width() > 800) {
				yunmaiCatalogDescr.each(function(index) {
					let thisHeight = $(this).outerHeight(true);

					if (thisHeight > maxHeight) {
					}
					maxHeight = thisHeight;
				});

				yunmaiCatalogDescr.css('height', maxHeight);
			}
		});

		// /* Инициализация слайдера yunmai catalog */
		// $(function() {
		// 	let yunmaiCatalogSlider = $('.yunmai-catalog__list');
		//
		// 	yunmaiCatalogSlider.slick({
		// 		slidesToShow  : 4,
		// 		slidesToScroll: 1,
		// 		arrows        : true,
		// 		dots          : false,
		// 		infinite      : true,
		// 		prevArrow     : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="50px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
		// 		nextArrow     : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35px" height="50px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
		// 		responsive    : [
		// 			{
		// 				breakpoint: 993,
		// 				settings  : {
		// 					slidesToShow  : 2,
		// 					slidesToScroll: 1,
		// 					arrows        : false,
		// 					dots          : true,
		// 					infinite      : true,
		// 					asNavFor      : '.yunmai-catalog__list-thumbnail',
		// 				}
		// 			},
		// 			{
		// 				breakpoint: 701,
		// 				settings  : {
		// 					slidesToShow  : 1,
		// 					adaptiveHeight: true
		// 				}
		// 			}
		// 		]
		// 	});
		//
		// 	// if (window.innerWidth >= 993 && yunmaiCatalogSlider.hasClass('slick-initialized')) {
		// 	// 	yunmaiCatalogSlider.slick('unslick');
		// 	// } else if (window.innerWidth < 993 && !yunmaiCatalogSlider.hasClass('slick-initialized')) {
		// 	// 	yunmaiCatalogSlider.slick({
		// 	// 		slidesToShow  : 2,
		// 	// 		slidesToScroll: 1,
		// 	// 		arrows        : false,
		// 	// 		dots          : true,
		// 	// 		infinite      : true,
		// 	// 		asNavFor      : '.yunmai-catalog__list-thumbnail',
		// 	// 		responsive    : [
		// 	// 			{
		// 	// 				breakpoint: 701,
		// 	// 				settings  : {
		// 	// 					slidesToShow  : 1,
		// 	// 					adaptiveHeight: true
		// 	// 				}
		// 	// 			}
		// 	// 		]
		// 	// 	});
		// 	// }
		// });

		/* Инициализация слайдера yunmai catalog thumbnail */
		$(function() {
			let yunmaiThumbnailSlider = $('.yunmai-catalog__list-thumbnail');

			if (window.innerWidth >= 993 && yunmaiThumbnailSlider.hasClass('slick-initialized')) {
				yunmaiThumbnailSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !yunmaiThumbnailSlider.hasClass('slick-initialized')) {
				yunmaiThumbnailSlider.slick({
					slidesToShow  : 3,
					slidesToScroll: 1,
					arrows        : false,
					dots          : false,
					infinite      : true,
					focusOnSelect : true,
					centerMode    : true,
					centerPadding : '125px',
					asNavFor      : '.yunmai-catalog__list',
					responsive    : [
						{
							breakpoint: 800,
							settings  : {
								centerPadding: '80px',
							}
						},
						{
							breakpoint: 601,
							settings  : {
								slidesToShow: 2,
								centerMode  : false,
							}
						}
					]
				});
			}
		});

		/* Инициализация слайдера yunmai chess */
		$(function() {
			let yunmaiChessSlider = $('.yunmai-chess__list');

			if (window.innerWidth >= 993 && yunmaiChessSlider.hasClass('slick-initialized')) {
				yunmaiChessSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !yunmaiChessSlider.hasClass('slick-initialized')) {
				yunmaiChessSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true,
					infinite      : true,
				});
			}
		});

		/* Инициализация слайдера jbl about */
		$(function() {
			let jblAboutSlider = $('.brand-about-jbl__descr');

			if (window.innerWidth >= 993 && jblAboutSlider.hasClass('slick-initialized')) {
				jblAboutSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !jblAboutSlider.hasClass('slick-initialized')) {
				jblAboutSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : true,
					infinite      : true,
					adaptiveHeight: true
				});
			}
		});

		/* Инициализация слайдера продуктов на страницах бренда */
		$(function() {
			let productsSlider = $('.products__tab-slider.brand-page');

			if (window.innerWidth >= 993 && !productsSlider.hasClass('slick-initialized') && $('.sales').hasClass('brand-page')) {
				productsSlider.slick({
					slidesToShow  : 5,
					slidesToScroll: 1,
					arrows        : true,
					dots          : true,
					infinite      : false,
					prevArrow     : '<a href="#" class="arrow arrow-prev"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,10.5 13.998,0 0,10.5 13.998,22 "/></svg></a>',
					nextArrow     : '<a href="#" class="arrow arrow-next"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="14px" height="22px" viewBox="0 0 13.998 22"><polygon fill="#000" points="6.999,11.5 0,22 13.998,11.5 0,0 "/></svg></a>',
					responsive    : [
						{
							breakpoint: 1661,
							settings  : {
								slidesToShow  : 4,
								slidesToScroll: 1,
								arrows        : true,
								dots          : true,
								infinite      : false
							}
						}
					]
				});
			} else if (window.innerWidth < 993 && productsSlider.hasClass('slick-initialized') && $('.sales').hasClass('brand-page')) {
				productsSlider.slick('unslick');
			}
		});

		/* Инициализация слайдера списка преймуществ у моделей брэнда */
		$(function() {
			let modelListSlider = $('.brand-page__models-list');

			if (window.innerWidth >= 993 && modelListSlider.hasClass('slick-initialized')) {
				modelListSlider.slick('unslick');
			} else if (window.innerWidth < 993 && !modelListSlider.hasClass('slick-initialized') && !modelListSlider.hasClass('elari')) {
				modelListSlider.slick({
					slidesToShow  : 2,
					slidesToScroll: 1,
					arrows        : false,
					dots          : false,
					centerMode    : false,
					centerPadding : '100px',
					infinite      : false,
					focusOnSelect : true,
					responsive    : [
						{
							breakpoint: 481,
							settings  : {
								slidesToShow  : 1
							}
						}
					]
				});
			} else if(window.innerWidth < 993 && !modelListSlider.hasClass('slick-initialized') && modelListSlider.hasClass('elari')) {
				modelListSlider.slick({
					slidesToShow  : 1,
					slidesToScroll: 1,
					arrows        : false,
					dots          : false,
					centerMode    : false,
					centerPadding : '180px',
					infinite      : false,
					focusOnSelect : true
				});
			}

			$('.brand-page__models-slider').on('swipe', function(event, slick, direction){
				modelListSlider.slick('slickGoTo', 0);
			});

			modelListSlider.on("mousedown mouseup touchstart ", function(event) {
				event.stopPropagation();
			})
		});
	});

})();

/* СКРИПТЫ ДЛЯ ЛИЧНОГО КАБИНЕТА */
$(function() {

	// Script for personal data TABs DESKTOP
	const personalList = document.querySelectorAll(".cabinet-page__left-list-desktop li"),
		blockShow = document.querySelectorAll('.cabinet-block');

	for (let i = 0; i < personalList.length; i++) {

		personalList[i].addEventListener('click', function() {
			for (let j = 0; j < personalList.length; j++) {
				personalList[j].removeAttribute('class');
			}

			for (let i = 0; i < blockShow.length; i++) {
				blockShow[i].classList.remove('active_block');
			}
			blockShow[i].classList.add('active_block');
			personalList[i].setAttribute('class', 'active');

		})
	}

	// Script for personal data TABs Mobile
	const personalListMob = document.querySelectorAll(".cabinet-page__left-list-mob li"),
		blockShowMob = document.querySelectorAll('.cabinet-block');

	for (let i = 0; i < personalListMob.length; i++) {

		personalListMob[i].addEventListener('click', function() {
			for (let j = 0; j < personalListMob.length; j++) {
				personalListMob[j].removeAttribute('class');
			}

			for (let i = 0; i < blockShow.length; i++) {
				blockShowMob[i].classList.remove('active_block');
			}
			blockShowMob[i].classList.add('active_block');
			personalListMob[i].setAttribute('class', 'active');

		})
	}

// Script for CHECKOUT

	let fastOrderCheck = document.querySelectorAll('.quick-order-block input')[0],
		methodDeliveryArea = document.querySelector('.method-delivery');

	if (fastOrderCheck) {
		fastOrderCheck.addEventListener('change', function() {
			if (!fastOrderCheck.checked) {
				methodDeliveryArea.style.display = 'block';
			} else {
				methodDeliveryArea.removeAttribute('style');
				creditArea.removeAttribute('style');
				bonusArea.removeAttribute('style');
				deliveryArea.removeAttribute('style');
				summaryPriceArea.removeAttribute('style');
				creditPriceArea.removeAttribute('style');
			}
		})
	}

	// show comments
	let addComment = document.querySelector('.add-comment'),
		removeComment = document.querySelector('.remove-comment'),
		commentArea = document.querySelector('.comment-area');

	if (addComment) {
		addComment.addEventListener('click', function(event) {
			event.preventDefault();
			addComment.style.display = 'none';
			removeComment.style.display = 'block';
			commentArea.style.display = 'block';
		})

	}

	if (removeComment) {
		removeComment.addEventListener('click', function(event) {
			event.preventDefault();
			addComment.style.display = 'block';
			removeComment.style.display = 'none';
			commentArea.removeAttribute('style');
		})
	}

	//show info-more
	let infoMoreButton = document.querySelector('.info-more'),
		infoMoreArea = document.querySelector('.info-more-area');
	if (infoMoreButton) {
		infoMoreButton.addEventListener('mouseover', function() {
			infoMoreArea.style.visibility = 'visible';
			infoMoreArea.style.opacity = '1';
		});
		infoMoreButton.addEventListener('mouseleave', function() {
			infoMoreArea.removeAttribute('style');
		});
	}

	// show Credit Area
	let methodValue = document.querySelectorAll('#method-pay')[0],
		creditArea = document.querySelector('.credit-area'),
		bonusArea = document.querySelector('.bonus-area'),
		deliveryArea = document.querySelector('.delivery'),
		summaryPriceArea = document.querySelector('.summary-price'),
		creditPriceArea = document.querySelector('.credit-price');

	if (methodValue) {
		methodValue.addEventListener('change', function() {
			if (methodValue.value === 1) {
				creditArea.style.display = 'block';
				bonusArea.style.display = 'none';
				deliveryArea.style.paddingTop = '0';
				summaryPriceArea.style.display = 'none';
				creditPriceArea.style.display = 'block';
			} else {
				creditArea.removeAttribute('style');
				bonusArea.removeAttribute('style');
				deliveryArea.removeAttribute('style');
				summaryPriceArea.removeAttribute('style');
				creditPriceArea.removeAttribute('style');
			}
		})
	}

	// Move elements basket checkout in mobile view
	let checkoutRight = $('.checkout-area__right');
	$(window).resize(function() {
		let windowsWidth = $(window).width();
		if (windowsWidth <= 640) {
			$(".agree-order-block").before(checkoutRight);
		}
	});
	let windowsWidth = $(window).width();
	if (windowsWidth <= 640) {
		$(".agree-order-block").before(checkoutRight);
	}
});