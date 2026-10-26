document.addEventListener('DOMContentLoaded', () => {

  const months = [
    'января','февраля','марта','апреля',
    'мая','июня','июля','августа',
    'сентября','октября','ноября','декабря'
  ];

  function formatDate(date) {
    return `${date.getDate()} ${months[date.getMonth()]}`;
  }

  const today = new Date();

  // ранняя цена = через 14 дней
  const deadlineDate = new Date(today);
  deadlineDate.setDate(deadlineDate.getDate() + 14);

  // старт курса = через 28 дней
  const startDate = new Date(today);
  startDate.setDate(startDate.getDate() + 28);

  document.querySelectorAll('.js-deadline-date').forEach(el => {
    el.textContent = formatDate(deadlineDate);
  });

  document.querySelectorAll('.js-start-date').forEach(el => {
    el.textContent = formatDate(startDate);
  });

});