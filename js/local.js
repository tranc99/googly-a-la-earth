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
    ge.getWindow().setVisibility(true);
    ge.getNavigationControl().setVisibility(ge.VISIBILITY_SHOW);

    var la = ge.createLookAt('');
    la.set(48.761, -121.794, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -8.541, 66.213, 20000);
    ge.getView().setAbstractView(la);

    // Create the placemark.
    var lineStringPlacemark = ge.createPlacemark('');

    // Create the LineString; set it to extend down to the ground
    // and set the altitude mode.
    var lineString = ge.createLineString('');
    lineStringPlacemark.setGeometry(lineString);
    lineString.setExtrude(true);
    lineString.setAltitudeMode(ge.ALTITUDE_RELATIVE_TO_GROUND);

    // Add LineString points.
    lineString.getCoordinates().pushLatLngAlt(48.754, -121.835, 700);
    lineString.getCoordinates().pushLatLngAlt(48.764, -121.828, 700);
    lineString.getCoordinates().pushLatLngAlt(48.776, -121.818, 700);
    lineString.getCoordinates().pushLatLngAlt(48.787, -121.794, 700);
    lineString.getCoordinates().pushLatLngAlt(48.781, -121.778, 700);
    lineString.getCoordinates().pushLatLngAlt(48.771, -121.766, 700);
    lineString.getCoordinates().pushLatLngAlt(48.757, -121.768, 700);
    lineString.getCoordinates().pushLatLngAlt(48.747, -121.773, 700);

    // Create a style and set width and color of line.
    lineStringPlacemark.setStyleSelector(ge.createStyle(''));
    var lineStyle = lineStringPlacemark.getStyleSelector().getLineStyle();
    lineStyle.setWidth(5);
    lineStyle.getColor().set('9900ffff');  // aabbggrr format

    // Add the feature to Earth.
    ge.getFeatures().appendChild(lineStringPlacemark);    

}


google.setOnLoadCallback(init);
