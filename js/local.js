alert("initializing our app...")
google.load("earth", "1", {"other_params": "sensor={false}"});

var ge;

/*function createPlacemarks() {
    var placemark = ge.createPlacemark('');

    var point = ge.createPoint('');
    point.setLatitude(12.345);
    point.setLongitude(54.321);
    placemark.setGeometry(point);

    ge.getFeatures().appendChild(placemark);
}*/

function failureCB(errorCode) {
    alert("failed with error code" + errorCode.toString());
}

//functions to build the controls


function init() {
    console.log("init.d");
    google.earth.createInstance('map3d', initCB, failureCB);
}

function initCB(instance) {
    ge = instance;
    //createPlacemarks();
    ge.getWindow().setVisibility(true);

        // Create the placemark.
    var placemark = ge.createPlacemark('');
    placemark.setName("AT&T");

    //define a custom icon
    var icon = ge.createIcon('');
    icon.setHref('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
    var style = ge.createStyle(''); //create a new style
    style.getIconStyle().setIcon(icon); //apply the icon to the style
    style.getIconStyle().setScale(5.0);
    placemark.setStyleSelector(style); //apply the style to the placemark

    // Set the placemark's location.  
    var point = ge.createPoint('');
    point.setLatitude(12.345);
    point.setLongitude(54.321);
    placemark.setGeometry(point);

    // Add the placemark to Earth.
    ge.getFeatures().appendChild(placemark);

}


google.setOnLoadCallback(init);
