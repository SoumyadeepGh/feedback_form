$('.js-tilt').tilt({
    scale: 1.1
})
function closeModal() {
    document.getElementById('thankYouModal').style.display = 'none';
}
function submitForm() {
    var form = document.getElementById('feedbackForm');
    var formData = new FormData(form);

    // Save responses in an object
    var responses = {};
    formData.forEach(function(value, key){
        responses[key] = value;
    });

    // Display thank you message along with saved responses
    document.getElementById('thankYouModal').style.display = 'block';

    // Display thank you message along with saved responses
    document.getElementById('feedbackResponses').innerText = JSON.stringify(responses, null, 2);
}