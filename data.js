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
