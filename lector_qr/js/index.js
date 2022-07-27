let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
	scanner.addListener('scan', function (content) {
	console.log(content);
});

Instascan.Camera.getCameras().then( cameras => {
	if (cameras.length > 0) {
	  scanner.start(cameras[0]);
	} else {
	  console.error('No cameras found.');
	}
}).catch( e => {
	console.log(e);
});


