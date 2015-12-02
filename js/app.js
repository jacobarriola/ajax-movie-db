$(document).ready(function(){
  $('#searchForm').submit(function(evt){
    evt.preventDefault();
    var $searchField = $('#search');


    var url = "http://www.omdbapi.com/?";
    var title = $searchField.val();
    var options = {
      t: title
    };
    function displayTitles(data) {
      var movieData = '<ul>';
      for (var property in data) {
        movieData += '<li>' + property + ': ' + data[property] + '</li>';
      }

      movieData += '</ul>';
      if(data.Poster) {
        movieData += '<h2 style="text-transform: capitalize;">' + data.Type + ' Poster</h2>';
        movieData +=  '<img src="' + data.Poster + '">';
      }
      console.log(data);
      $('#movieList').html(movieData);
    }

    $.getJSON(url, options, displayTitles);
  });
});
