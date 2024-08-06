/*  ================================================  Form Configuration Start  ================================================  */

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('form-response');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous response
        responseDiv.textContent = '';
        responseDiv.className = '';

        // Simple client-side validation
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (name === '' || email === '' || subject === '' || message === '') {
            responseDiv.textContent = 'Please fill out all fields.';
            responseDiv.className = 'error';
            return;
        }

        // Clear form fields
        form.reset();
    });
});

/*  ================================================  Form Configuration End  ================================================  */


/*  ================================================  Mail Configuration Start  ================================================  */

function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    }

    emailjs.send("service_p4gn3j5", "template_kpekv6t", params).then(alert("Your Message has been submited successfully...!! Thank you for your message! I'll get back to you soon."))

    if (name === '' && email === '' && subject === '' && message === '') {
        alert('Please fill out all fields before submitting.');
        console.log("Not fill details...")
    } else {
        emailjs.send("service_p4gn3j5", "template_kpekv6t", params).then(alert("Your Message has been submited successfully...!! Thank you for your message! I'll get back to you soon."))
        console.log("Fill all details...")
    }
}

/*  ================================================  Mail Configuration End  ================================================  */