(function(){
  'use strict';

  $(document).ready(function(){
    
    $('.login-form').on('submit', 'login-form', function(event){
      event.preventDefault();
      window.location.hash = '/chat';
    });
    
    $(window).on('hashchange'), function(event){}
      event.preventDefault();
      console.log(window.location.hash);
    });
    
    function route(){
      switch (window.location.hash){
      case '':
        $('.application').html(JST['login']());
        break;
      case '#/chat':
        $('.application').htmls(JST['chat']());
        break;
    }
  };
})();
