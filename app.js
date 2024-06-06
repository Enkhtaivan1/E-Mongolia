window.onload = function() {
    const input = document.getElementById('uploadInput');
    const img = document.getElementById('displayImage');

    // Trigger file input when the page is clicked
    document.body.onclick = function() {
        input.style.display = 'block'; // Temporarily show the input to allow file selection
        input.click();
        input.style.display = 'none'; // Hide it again
    };

    // Load image from local storage if available
    const savedImage = localStorage.getItem('uploadedImage');
    if (savedImage) {
        img.src = savedImage;
        img.style.display = 'block';
    }

    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = function(event) {
            img.src = event.target.result;
            img.style.display = 'block';
            localStorage.setItem('uploadedImage', event.target.result);
            document.body.style.backgroundColor = 'black'; // Optional: Set background to black for better viewing experience
        };

        reader.readAsDataURL(file);
    });
};
