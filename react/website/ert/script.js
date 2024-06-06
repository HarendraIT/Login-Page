function convertFile() {
    var fileInput = document.getElementById('fileInput');
    var conversionType = document.getElementById('conversionType').value;
    var formData = new FormData();
    formData.append('file', fileInput.files[0]);
    formData.append('conversionType', conversionType);
    
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'convert.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('output').innerHTML = xhr.responseText;
        } else {
            document.getElementById('output').innerHTML = 'Error occurred during conversion.';
        }
    };
    xhr.send(formData);
}
