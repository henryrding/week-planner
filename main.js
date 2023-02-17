var $weekButtons = document.querySelector('#week-buttons');
$weekButtons.addEventListener('click', handleClick);

var data = {
  sunday: [],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  editing: null,
  timeId: 0
};

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  this.localStorage.setItem('data-local-storage', dataJSON);
});

if (localStorage.getItem('data-local-storage') !== null) {
  data = JSON.parse(localStorage.getItem('data-local-storage'));
}

function handleClick(event) {
  if (event.target.id === 'sunday-button') {
    viewSwap('Sunday');
  } else if (event.target.id === 'monday-button') {
    viewSwap('Monday');
  } else if (event.target.id === 'tuesday-button') {
    viewSwap('Tuesday');
  } else if (event.target.id === 'wednesday-button') {
    viewSwap('Wednesday');
  } else if (event.target.id === 'thursday-button') {
    viewSwap('Thursday');
  } else if (event.target.id === 'friday-button') {
    viewSwap('Friday');
  } else if (event.target.id === 'saturday-button') {
    viewSwap('Saturday');
  }
}

var $weekTitle = document.querySelector('h3');
var $sunday = document.querySelector('#sunday-events');
var $monday = document.querySelector('#monday-events');
var $tuesday = document.querySelector('#tuesday-events');
var $wednesday = document.querySelector('#wednesday-events');
var $thursday = document.querySelector('#thursday-events');
var $friday = document.querySelector('#friday-events');
var $saturday = document.querySelector('#saturday-events');
function viewSwap(day) {
  if (day === 'Sunday') {
    $weekTitle.textContent = 'Scheduled Events for Sunday';
    $sunday.className = 'row';
    $saturday.className = 'row hidden';
    $monday.className = 'row hidden';
    $tuesday.className = 'row hidden';
    $wednesday.className = 'row hidden';
    $thursday.className = 'row hidden';
    $friday.className = 'row hidden';
  } else if (day === 'Monday') {
    $weekTitle.textContent = 'Scheduled Events for Monday';
    $sunday.className = 'row hidden';
    $saturday.className = 'row hidden';
    $monday.className = 'row';
    $tuesday.className = 'row hidden';
    $wednesday.className = 'row hidden';
    $thursday.className = 'row hidden';
    $friday.className = 'row hidden';
  } else if (day === 'Tuesday') {
    $weekTitle.textContent = 'Scheduled Events for Tuesday';
    $sunday.className = 'row hidden';
    $saturday.className = 'row hidden';
    $monday.className = 'row hidden';
    $tuesday.className = 'row';
    $wednesday.className = 'row hidden';
    $thursday.className = 'row hidden';
    $friday.className = 'row hidden';
  } else if (day === 'Wednesday') {
    $weekTitle.textContent = 'Scheduled Events for Wednesday';
    $sunday.className = 'row hidden';
    $saturday.className = 'row hidden';
    $monday.className = 'row hidden';
    $tuesday.className = 'row hidden';
    $wednesday.className = 'row';
    $thursday.className = 'row hidden';
    $friday.className = 'row hidden';
  } else if (day === 'Thursday') {
    $weekTitle.textContent = 'Scheduled Events Thursday';
    $sunday.className = 'row hidden';
    $saturday.className = 'row hidden';
    $monday.className = 'row hidden';
    $tuesday.className = 'row hidden';
    $wednesday.className = 'row hidden';
    $thursday.className = 'row';
    $friday.className = 'row hidden';
  } else if (day === 'Friday') {
    $weekTitle.textContent = 'Scheduled Events for Friday';
    $sunday.className = 'row hidden';
    $saturday.className = 'row hidden';
    $monday.className = 'row hidden';
    $tuesday.className = 'row hidden';
    $wednesday.className = 'row hidden';
    $thursday.className = 'row hidden';
    $friday.className = 'row';
  } else if (day === 'Saturday') {
    $weekTitle.textContent = 'Scheduled Events for Saturday';
    $sunday.className = 'row hidden';
    $saturday.className = 'row';
    $monday.className = 'row hidden';
    $tuesday.className = 'row hidden';
    $wednesday.className = 'row hidden';
    $thursday.className = 'row hidden';
    $friday.className = 'row hidden';
  }
}

var $addEntry = document.querySelector('#add-entry');
var $overlay = document.querySelector('#overlay');

$addEntry.addEventListener('click', function () {
  $overlay.className = 'row';
});

var $form = document.querySelector('form');
$form.addEventListener('submit', function (event) {
  event.preventDefault();
  var formData = {
    day: $form.elements.date.value,
    time: $form.elements.time.value,
    description: $form.elements.description.value
  };
  for (var i = 0; i < data.formData.day.length; i++) {
    if (formData.time <= data.formData.day[i].time) {
      data.formData.day.splice(i, 0, formData);
    }
  }
});

var $tbody = document.querySelector('tbody');
function renderDayEntries(entry) {
  var $tr = document.createElement('tr');
  var $td = document.createElement('td');
  $td.className = 'table-left';
  var $td = document.createElement('td');
}
