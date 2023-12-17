// Function to handle the click event on the avatar image
document.getElementById('avatar-container').addEventListener('click', function () {
    // Trigger the click event on the file input
    document.getElementById('avatar-input').click();
});

// Function to handle the file input change event
function handleFileSelect(input) {
    // Get the selected file
    var selectedFile = input.files[0];

    // Check if a file is selected
    if (selectedFile) {
        // Read the selected file and set it as the source of the avatar image
        var reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('avatar-image').src = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
    }
}