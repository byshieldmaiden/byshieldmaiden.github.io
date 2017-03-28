
//Tells the script we're about to do something
$(document).ready(function() {

 function showPugPhoto () {
  var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?id=20538663@N00&size=b&lang=en-us&format=json&jsoncallback=?";
  var pug = $(this).text();
  var flickrOptions = {
  tags: "pug, pugs",
    format: "json"
  } // end FlickrOptions
  //Time to make it pretty
   var displayPhotos = function(data){
      var photoHTML = '<ul>';
     $.each(data.items,function(i,photo) {
      photoHTML += '<li>';
      photoHTML += '<a href="' + photo.link + '" class="image">';
      photoHTML += '<img src="' + photo.media.m + '"></a></li>';
        }); // end each
      photoHTML += '</ul>';
    $('#photos').html(photoHTML);
  }//end making it pretty
      $.getJSON(flickerAPI, flickrOptions, displayPhotos);
    }; //end showPugPhoto function
  showPugPhoto ();
  $('button').click(showPugPhoto); //adding the button

}); //end of the world
