const notifications = document.querySelectorAll('li'),
 readAll = document.querySelector('.read_all'),
 dots = document.querySelectorAll('span.dot'),
 num = document.querySelector('.num'),
 privateMessage = document.querySelector('.private_message');



notifications.forEach((notification, index) => {
  notification.addEventListener('click', () => {
  if(notification.classList.contains('message')){ privateMessage.style.display = 'block'};
  notification.classList.remove('unread');
   dots[index].classList.remove('dot');
   num.innerText = document.querySelectorAll('li.unread').length;
  });
});

 


