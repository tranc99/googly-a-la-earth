alert("initializing our app...")
google.load("earth", "1", {"other_params": "sensor={false}"});

var ge;

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

    //create a style map
    var styleMap = ge.createStyleMap('');

    //create normal style for the style map
    var normalStyle = ge.createStyle('');
    var normalIcon = ge.createIcon('');
    normalIcon.setHref('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
    normalStyle.getIconStyle().setIcon(normalIcon);

    //create highlight style for style map
    var highlightStyle = ge.createStyle('');
    var highlightIcon = ge.createIcon('');
    highlightIcon.setHref('http://google-maps-icons.googlecode.com/files/girlfriend.png');
    highlightStyle.getIconStyle().setIcon(highlightIcon);
    highlightStyle.getIconStyle().setScale(5.0);

    styleMap.setNormalStyle(normalStyle);
    styleMap.setHighlightStyle(highlightStyle);

    //apply styleMap to a placemark
    placemark.setStyleSelector(styleMap);

    // Set the placemark's location.  
    var point = ge.createPoint('');
    point.setLatitude(12.345);
    point.setLongitude(54.321);
    placemark.setGeometry(point);

    // Add the placemark to Earth.
    ge.getFeatures().appendChild(placemark);

}


google.setOnLoadCallback(init);
