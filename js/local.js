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
    ge.getSun().setVisibility(true);
    ge.getWindow().setVisibility(true);
    ge.getNavigationControl().setVisibility(ge.VISIBILITY_SHOW);

    var la = ge.createLookAt('');
    la.set(48.761, -121.794, 0, ge.ALTITUDE_RELATIVE_TO_GROUND, -8.541, 66.213, 20000);
    ge.getView().setAbstractView(la);

    // Create the GroundOverlay.
    var groundOverlay = ge.createGroundOverlay('');

    // Specify the image path and assign it to the GroundOverlay.
    var icon = ge.createIcon('');
    icon.setHref("http://www.google.com/logos/earthday08.gif");
    groundOverlay.setIcon(icon);

    // Specify the geographic location.
    var latLonBox = ge.createLatLonBox('');
    latLonBox.setBox(48.80, 48.75, -121.77, -121.85, 0);
    groundOverlay.setLatLonBox(latLonBox);

    // Add the GroundOverlay to Earth.
    ge.getFeatures().appendChild(groundOverlay);

    for (i = 0; i < 20000; i++) {
        console.log('z');
    }

    //create At&T stadium lookAt  Location: California, United States
    //Latitude & Longitude: 37.778496, -122.388931 ref: http://www.satellitesights.com/satelliteimage/ATT_Park_California_United_States
    var attLookAt =  ge.createLookAt('');

    //set the location
    attLookAt.setLatitude(37.778496);


}


google.setOnLoadCallback(init);
