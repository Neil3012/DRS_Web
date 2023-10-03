// Get a reference to the AR object and UI elements
const arObject = document.querySelector('#boxID');
const uiElement = document.querySelector('#ar-ui');

// Function to update the UI position
function updateUIPosition() {
    const arObjectPosition = arObject.object3D.position;
    const arObjectWorldPos = new THREE.Vector3();
    arObject.object3D.getWorldPosition(arObjectWorldPos);

    // Convert world coordinates to screen coordinates
    const screenPosition = arjs.camera.project(arObjectWorldPos);

    // Set the position of the UI element
    uiElement.style.top = `${screenPosition.y}px`;
    uiElement.style.left = `${screenPosition.x}px`;
}

// Call the function when the AR object is spawned or moves
arObject.addEventListener('object3dset', updateUIPosition);
arObject.addEventListener('positionchanged', updateUIPosition);

// Initial positioning
updateUIPosition();
