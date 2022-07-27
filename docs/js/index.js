// let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
let scanner = new Instascan.Scanner({ video: document.getElementById('preview'), mirror: false });
	scanner.addListener('scan', function (content) {
	console.log(content);
	alert('CODIGO: '+ content);
});

Instascan.Camera.getCameras().then( cameras => {
	if (cameras.length > 0) {
	//   scanner.start(cameras[0]);
	  scanner.start(cameras[1]);
	} else {
	  console.error('No cameras found.');
	}
}).catch( e => {
	console.log(e);
});


