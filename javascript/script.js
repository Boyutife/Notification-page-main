//  select DOM elements

const notificationsList = document.querySelectorAll('li'),
 readAllButton = document.querySelector('.read_all'),
 dotsList = document.querySelectorAll('span.dot'),
 notificationCount = document.querySelector('.notification_count'),
 privateMessageModal = document.querySelector('.private_message_modal');


// function to handle notification click event

function handleNotificationClick(notification, index){
  // show private message modal if notification is a message 
  if(notification.classList.contains('message')){
    privateMessageModal.style.display = 'block';
  }
  // mark notification as read
  notification.classList.remove('unread');
  dotsList[index].classList.remove('dot');
  // update notififications count
  const unreadNotifications = document.querySelectorAll('li.unread');
  notificationCount.innerText = unreadNotifications.length;
};

// add click event listener to each notification
for (let i = 0; i < notificationsList.length; i++) {
  const notification = notificationsList[i];
  notification.addEventListener('click', () => handleNotificationClick(notification, i));
}

// add click event listener to "mark all as read" button
readAllButton.addEventListener('click', () => {
  // mark all notifications as read
  notificationsList.forEach(notification => {
    if (notification.classList.contains('message')) {
      privateMessageModal.style.display = 'block';
    }
    notification.classList.remove('unread');
  });
  dotsList.forEach(dot => dot.classList.remove('dot'));
  // update notification count
  notificationCount.innerText = 0;
});





 


