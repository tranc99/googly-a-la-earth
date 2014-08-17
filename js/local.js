alert("initializing our app...")
google.load("earth", "1", {"other_params": "sensor={true}"});

var ge;

//add databases
function addDatabase(db, username, password) {
    console.log("INFO: Adding database: " + db);
    google.earth.createInstance('map3d', initCB, failureCB, {
            database: "http://khmdb.google.com/?db=" + db,
            username: username,
            password: password,
    });
}

function init() {
    console.log("init.d");
    google.earth.createInstance('map3d', initCB, failureCB);
}

function initCB(instance) {
    ge = instance;
    ge.getWindow().setVisibility(true);
	placemarks();	
	//createPlacemark();
}

function createPlacemark() {
    var placemark = ge.createPlacemark('');
    placemark.setName("placemark");
    ge.getFeatures().appendChild(placemark);
  
    // Create style map for placemark
    var icon = ge.createIcon('');
    icon.setHref('http://maps.google.com/mapfiles/kml/paddle/red-circle.png');
    var style = ge.createStyle('');
    style.getIconStyle().setIcon(icon);
    placemark.setStyleSelector(style);
    
    // Create point
    var la = ge.getView().copyAsLookAt(ge.ALTITUDE_RELATIVE_TO_GROUND);
    var point = ge.createPoint('');
    point.setLatitude(la.getLatitude());
    point.setLongitude(la.getLongitude());
    placemark.setGeometry(point);
  
    //counter++;
  }
  

function failureCB(errorCode) {
    alert("failed with error code" + errorCode.toString());
}

//functions to build the controls

function placemarks() {
	console.log("placemarks");
	//create a placemark
	var placemark = ge.createPlacemark('');
	placemark.setName("placemark");
	
	//locate the placemark
	var point = ge.createPoint('');
	point.setLatitude(12.345);
	point.setLongitude(54.321);
	placemark.setGeometry(point);
	
	//add the placemark
	ge.getFeatures().appendChild(placemark);
}


google.setOnLoadCallback(init);
