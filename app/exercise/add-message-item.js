import createMessageItem from './create-message-item';
export default function addMessageItem(item, value) {
  const messageItem = createMessageItem(value);
  item.appendChild(messageItem);
}
