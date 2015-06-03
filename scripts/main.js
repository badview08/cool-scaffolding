(function(){
  'use strict';
  	var username ='';
    
  $(document).ready(function(){
    
    route();
    
    $('.login-form').on('submit', 'login-form', function(event){
      event.preventDefault();
      console.log($(this).find('.login-user-name'));
      window.location.hash = '/chat';
    });
    
    $(window).on('hashchange'), function(event){
      event.preventDefault();
      console.log(window.location.hash);
    };
    $(window).on('hashchange', function(event){
      event.preventDefault();
      route();
    });
  });
    
    function route(){
      switch (window.location.hash){
      case '':
        $('.application').html(JST['login']());
        break;
      case '#/chat':
        $('.application').htmls(JST['chat']());
        break;
    };
    function renderChat() {
      $('.application').html(JST['chat']());
      console.log('username: ', username);
    };
    };
})();
