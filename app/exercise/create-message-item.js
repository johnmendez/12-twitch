export default function createMessageItem(item) {
  const element = document.createElement('LI');

  element.innerHTML = `<span class = "message-item__username"> ${item.username}</span> ${item.message}`;

  return element;
}
