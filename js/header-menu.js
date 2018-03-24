$(function(){
    /*Прилетает с JS походу при resize*/
    $('.cart').click(function(){
        $('.header__mobile-top .header__cart-hover').eq(1).remove();
    });
    /*показать/скрыть поиск для планшета*/
   $(document).on('click','.tablet-view .search', function () {
       var searchBar = $('.header-search__tablet-view');
       if(!searchBar.is(':visible')){
           searchBar.css('display','flex');
       } else {
           searchBar.css('display','none');
       }


   });
    /*показать/скрыть поиск для телефона*/
   $(document).on('click','.header__mobile-menu-inner .search', function (event) {
       var searchBar = $('.header__mobile-search');
       searchBar.toggleClass('mobile-adaptive')
   });
});