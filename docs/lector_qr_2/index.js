/*let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  scanner.addListener('scan', function (content) {
    console.log(content);
  });

  scanner.addListener('active', function (content) {
  console.log('active');
});
scanner.addListener('inactive', function (content) {
  console.log('inactive');
});


  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      console.error('No cameras found.');
    }
  }).catch(function (e) {
    console.error(e);
  });

*/


/*var scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

scanner.addListener('scan', function (content) {
  // console.log(content);
  console.log('CODIGO: ',content);

  alert('content');
});

function start() {
    Instascan.Camera.getCameras()
        .then((cameras) => {
            scanner.start(cameras[0]);
        })
}*/