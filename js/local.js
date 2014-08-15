alert("initializing our app...")
google.load("earth", "1", {"other_params": "sensor={true}"});

function init() {
    console.log("init.d");
    google.earth.createInstance('map3d', initCB, failureCB);
}

function initCB(instance) {
    ge = instance;
    ge.getWindow().setVisibility(true);
}

function failureCB(errorCode) {
    alert("failed with error code" + errorCode.toString());
}

google.setOnLoadCallback(init);
