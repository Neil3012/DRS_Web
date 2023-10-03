// Get a reference to the AR object and tag element
const arObject = document.querySelector('#boxId');
const arTag = document.querySelector('#ar-tag');

// Function to update the tag position
function updateTagPosition() {
    const arObjectPosition = arObject.object3D.position;
    const arObjectWorldPos = new THREE.Vector3();
    arObject.object3D.getWorldPosition(arObjectWorldPos);

    // Convert world coordinates to screen coordinates
    const screenPosition = arjs.camera.project(arObjectWorldPos);

    // Set the position of the tag element
    arTag.style.top = `${screenPosition.y}px`;
    arTag.style.left = `${screenPosition.x}px`;
}

// Call the function when the AR object is spawned or moves
arObject.addEventListener('object3dset', updateTagPosition);
arObject.addEventListener('positionchanged', updateTagPosition);

// Initial positioning
updateTagPosition();
