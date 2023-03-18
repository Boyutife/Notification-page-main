const notifications = document.querySelectorAll('li');
const readAll = document.querySelector('.read_all');
const dots = document.querySelectorAll('span.dot');
const num = document.querySelector('.num');
const privateMessage = document.querySelector('.private_message');



notifications.forEach((notification, index) => {
  notification.addEventListener('click', () => {
  if(notification.classList.contains('message')){ privateMessage.style.display = 'block'};
  notification.classList.remove('unread');
   dots[index].classList.remove('dot');
   num.innerText = document.querySelectorAll('li.unread').length;
  });
});

 


