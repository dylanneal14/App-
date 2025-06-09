document.addEventListener('DOMContentLoaded', function() {
    // Get the inquiry form and the status message paragraph
    const inquiryForm = document.getElementById('inquiryForm');
    const formStatus = document.getElementById('formStatus');

    // Add an event listener for when the form is submitted
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', function(event) {
            // Prevent the default form submission behavior (which would refresh the page)
            event.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            // Basic validation (optional, as HTML 'required' handles much of this)
            if (!name || !email || !message) {
                formStatus.textContent = 'Please fill in all required fields (Name, Email, Message).';
                formStatus.style.color = 'red';
                return; // Stop the function if validation fails
            }

            // --- Simulate Form Submission (Client-Side Only) ---
            // In a real application, you would send this data to a server using fetch() or XMLHttpRequest
            // Example:
            /*
            fetch('/api/submit-inquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, message }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    formStatus.textContent = 'Thank you for your inquiry! We will get back to you soon.';
                    formStatus.style.color = 'green';
                    inquiryForm.reset(); // Clear the form
                } else {
                    formStatus.textContent = 'There was an error sending your inquiry. Please try again.';
                    formStatus.style.color = 'red';
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                formStatus.textContent = 'Network error. Please try again later.';
                formStatus.style.color = 'red';
            });
            */

            // For this simple app, we'll just log to the console and show a success message.
            console.log('Inquiry Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Phone:', phone || 'N/A'); // Handle optional phone
            console.log('Message:', message);

            formStatus.textContent = 'Your inquiry has been sent! We will contact you shortly.';
            formStatus.style.color = 'green';

            // Optionally clear the form after successful "submission"
            inquiryForm.reset();
        });
    }
});
