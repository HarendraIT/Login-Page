const startButton = document.getElementById('startButton');
const hangupButton = document.getElementById('hangupButton');
const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');

let localStream;
let remoteStream;
let peerConnection;

startButton.addEventListener('click', startCall);
hangupButton.addEventListener('click', hangupCall);

async function startCall() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = stream;
    localStream = stream;

    const configuration = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] };
    peerConnection = new RTCPeerConnection(configuration);
    peerConnection.addEventListener('icecandidate', handleICECandidate);
    peerConnection.addEventListener('track', handleTrack);

    localStream.getTracks().forEach(track => peerConnection.addTrack(track, localStream));

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);

    // Send offer to the other peer
  } catch (error) {
    console.error('Error starting call:', error);
  }
}

function handleICECandidate(event) {
  if (event.candidate) {
    // Send the ICE candidate to the other peer
  }
}

function handleTrack(event) {
  remoteVideo.srcObject = event.streams[0];
  remoteStream = event.streams[0];
}

function hangupCall() {
  localStream.getTracks().forEach(track => track.stop());
  if (remoteStream) {
    remoteStream.getTracks().forEach(track => track.stop());
  }
  if (peerConnection) {
    peerConnection.close();
  }
  localVideo.srcObject = null;
  remoteVideo.srcObject = null;
}
