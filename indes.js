const triggeredCube = document.getElementById('triggeredCube');

// Set a threshold distance for triggering the cube
const triggerDistance = 0.5; // Adjust this value as needed

// Add an event listener to track the camera position
AFRAME.registerComponent('track-camera', {
    tick: function () {
        // Get the current camera position
        const camera = this.el.sceneEl.camera;
        const cameraPosition = camera.el.object3D.position;

        // Calculate the distance between the camera and the point of interest (e.g., (0, 0, -1))
        const distanceToInterest = cameraPosition.distanceTo(new THREE.Vector3(0, 0, -1));
        distanceText.setAttribute('text', { value: 'Distance: ${distanceToInterest.toFixed(2)} m' });
        // Check if the camera is closer than the trigger distance
        if (distanceToInterest < triggerDistance) {
            triggeredCube.setAttribute('visible', 'true'); // Show the cube
        } else {
            triggeredCube.setAttribute('visible', 'false'); // Hide the cube
        }
    }
});

// Attach the track-camera component to the AR scene
document.querySelector('a-scene').setAttribute('track-camera', '');