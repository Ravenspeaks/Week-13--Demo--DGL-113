"use strict";
// define the default location for the map centre - NIC
const defaultloc = {
  lat: 49.708397,
  lng: -124.970977,
};
let myloc = defaultloc;
// After Google map API call returns result, call this function to show the map
function initMap() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      // succeeded
      function (position) {
        // update the lat and lng of myloc
        myloc.lat = position.coords.latitude;
        myloc.lng = position.coords.longitude;
        showMap(); // use the user location as the centre to show map
      },
      // failed
      function () {
        alert("User location cannot be identified. Use the default location.");
        // use the default location coordinates in lat and lng 
        showMap(); // use the default location as the centre to show map
      }
    ); // end of getCurrentPosition()
  } else {
    alert("Your browser cannot identify user location. To enable this feature, please upgrade to a newer version. default location will be used.");
    // use the default location coordinates in lat and lng 
    showMap(); // use the default location as the centre to show map
  } // end of if
} // end of getLocation()

function showMap() {
  // create a new map object and show it in the selected html element
  let mymap = new google.maps.Map(
    document.getElementById("map"),
    // these are the minimum options required
    {
      zoom: 15, // the larger the number, the more zoomed in
      center: myloc,
    }
  );
  // add a marker for the center on the map
  let marker = new google.maps.Marker({
    position: myloc, // the marker postion
    map: mymap, // on which map to put the marker
    icon: "images/dgllogo2.png", // use own icon for the marker.
  });
} // end of initMap
