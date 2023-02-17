var $weekButtons = document.querySelector('#week-buttons');

$weekButtons.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.id === 'sunday-button') {
    console.log('sunday');
  } else if (event.target.id === 'monday-button') {
    console.log('monday');
  } else if (event.target.id === 'tuesday-button') {
    console.log('tuesday');
  } else if (event.target.id === 'wednesday-button') {
    console.log('wednesday');
  } else if (event.target.id === 'thursday-button') {
    console.log('thursday');
  } else if (event.target.id === 'friday-button') {
    console.log('friday');
  } else if (event.target.id === 'saturday-button') {
    console.log('saturday');
  }
}
