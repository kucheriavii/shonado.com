$(function(){
    $('.cart').click(function(){
        $('.header__mobile-top .header__cart-hover').eq(1).remove();
    });

   $(document).on('click','.tablet-view .search', function () {
       var searchBar = $('.header-search__tablet-view');
       if(!searchBar.is(':visible')){
           searchBar.css('display','flex');
       } else {
           searchBar.css('display','none');
       }


   });
   $(document).on('click','.header__mobile-menu-inner .search', function (event) {
       var searchBar = $('.header__mobile-search');
       searchBar.toggleClass('mobile-adaptive')
   })
});