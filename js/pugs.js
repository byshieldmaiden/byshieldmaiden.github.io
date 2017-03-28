//Tells the script we're about to do something
$(document).ready(function() {

//Append a button for people to click to refresh
 $('button').click(function () {

//Now we say, "What's up, Flickr! This is what we need"
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var pug = $(this).text();
    var flickrOptions = {
      tags: "pug, pugs",
      format: "json"
    };

    //Time to make it pretty
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items,function(i,photo) {
        photoHTML += '<li>';
        photoHTML += '<a href="' + photo.link + '" class="image">';
        photoHTML += '<img src="' + photo.media.m + '"></a></li>';
      }); // end each
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
    }
    $.getJSON(flickerAPI, flickrOptions, displayPhotos);

  }); //Now we're done clicking

}); // And we're finished!
