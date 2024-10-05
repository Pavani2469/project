// QR Scanner integration
let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
scanner.addListener('scan', function (content) {
    alert('Scanned content: ' + content);
    // Simulate fetching health reports based on QR content
    document.querySelector('.health-section').innerHTML += `<p>Fetched Health Report: ${content}</p>`;
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

function bookAmbulance() {
    alert('Ambulance booking request sent.');
    // Integrate actual ambulance booking API here
}
