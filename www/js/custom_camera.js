var CustomCamera = {
	getPicture: function(success, failure, params){
		cordova.exec(success, failure, "CustomCamera", "openCamera", [params]);
	}
};
module.exports = CustomCamera;
