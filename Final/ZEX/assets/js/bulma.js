

document.addEventListener('DOMContentLoaded', function () {
   // Notification
    var deletes = document.querySelectorAll('.notification .delete');
  
    Array.prototype.forEach.call(deletes, function ($delete) {
      var $notification = $delete.parentNode;
  
      $delete.addEventListener('click', function () {
        $notification.parentNode.removeChild($notification);
      });
    });

    // Burger Menu
     // open
     const burger = document.querySelectorAll('.navbar-menu-open');
     const menu = document.querySelectorAll('.navbar-side');
 
     let toggleClass = 'is-hidden';
     if (menu.length && menu[0].getAttribute('data-side-class')) {
         toggleClass = menu[0].getAttribute('data-side-class');
     }
 
     if (burger.length && menu.length) {
         for (var i = 0; i < burger.length; i++) {
             burger[i].addEventListener('click', function() {
                 for (var j = 0; j < menu.length; j++) {
                     menu[j].classList.toggle(toggleClass);
                 }
             });
         }
     }
 
     // close
     const close = document.querySelectorAll('.navbar-close');
     const backdrop = document.querySelectorAll('.navbar-backdrop');
 
     if (close.length) {
         for (var i = 0; i < close.length; i++) {
             close[i].addEventListener('click', function() {
                 for (var j = 0; j < menu.length; j++) {
                     menu[j].classList.toggle(toggleClass);
                 }
             });
         }
     }
 
     if (backdrop.length) {
         for (var i = 0; i < backdrop.length; i++) {
             backdrop[i].addEventListener('click', function() {
                 for (var j = 0; j < menu.length; j++) {
                     menu[j].classList.toggle(toggleClass);
                 }
             });
         }
     }


  });
  
