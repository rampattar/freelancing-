document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);

    // You can add your email sending logic here

    alert('Thank you for your message! I will get back to you soon.');
    this.reset(); // Clear the form
});
