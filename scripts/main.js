(function(){
  'use strict';
  	var username ='';
    
  $(document).ready(function(){
    
    route();
    
    $(document).on('submit', '.login-form', function(event){
      event.preventDefault();
      username = ($(this).find('.login-form-username').val());
      window.location.hash = '/chat';
    });
    
    $(window).on('hashchange', function(event){
      event.preventDefault();
      route();
    });
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
        renderChat()
        //$('.application').htmls(JST['chat']());
        break;
    };
    }
    function renderChat(){
      $('.application').html(JST['chat']());
      console.log('username: ', username);
   };
   var messages = [
     {
       username:"Jake",
       created_at: new Date(),
       content:Math.random()
     }
   ]
   $.ajax({
     url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/",
     type:"POST",
     data: {
       username: 'Gabe',
       created_at: new Date(),
       content: "Hello"
     }
   })
   function deleteInvalidMessages(){
  $.ajax({
    url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/"
  }).then(function(messages) {
    console.log(messages);
    var invalid = _.reject(messages, function(message) {
      return message.hasOwnProperty('username')
          && message.hasOwnProperty('created_at')
          && message.hasOwnProperty('content')
    });
    console.log(invalid);
    invalid.forEach(function(message) {
      $.ajax({
        url: "http://tiny-lasagna-server.herokuapp.com/collections/messages/" + message._id,
        type: "DELETE"
      })
    });
  });
} 
})();
