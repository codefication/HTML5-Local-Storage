$(document).ready(function(e){
$('#exampleInputName1').val('');
var data = {

    "contacts": [
        {   "first" : "Niel", "last" : "Poojari", "phone": 9898989898},
        {   "first" : "Nirvaan", "last" : "Ahuja", "phone": 7778889999},
        {   "first" : "Nitish", "last" : "Rathore", "phone": 2233445566},
        {   "first" : "Nishant", "last" : "Jain", "phone": 6767676767}
    ]

}

localStorage.setItem("data", JSON.stringify(data));

var data = JSON.parse(localStorage.getItem("data"));
var contacts = data.contacts;

for(var i = 0; i<contacts.length; i++){
  $("#contacts").append('<li> First Name: ' + contacts[i].first + "<br> Last Name: " + contacts[i].last + "<br> Phone Number: " + contacts[i].phone + "</li>");
}

$(document).off('click', '#saveBtn').on('click', '#saveBtn', function(e) {
  e.preventDefault();
  var str = $('#exampleInputName1').val();
  if(str){
    localStorage.setItem('str', str);
    $('.notification').html('You have added ' + str + ' in to localStorage').css('visibility','visible');
  }
});

$(document).off('click', '#getBtn').on('click', '#getBtn', function(e) {
  var str = localStorage.getItem('str');
  if(str){
    $ ('.getStr').html(str);
  }else if(str == null){
    $ ('.getStr').html('null');
  }  
});

$(document).off('click', '#RemoveBtn').on('click', '#RemoveBtn', function(e) {
  localStorage.removeItem("str");
  var str = localStorage.getItem('str');
  if(str == null){
    $ ('.getStr').html('null');
    $('.notification').html('').css('visibility','visible');
  }
});
});