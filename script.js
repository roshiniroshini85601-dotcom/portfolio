// ===== EMAILJS INITIALIZATION =====
(function () {
  emailjs.init("QBSBRscNn79JshTtZ"); // EmailJS Public Key
})();

// ===== MENU =====
function openmenu() {
  document.getElementById("sidemenu").style.right = "0";
}

function closemenu() {
  document.getElementById("sidemenu").style.right = "-200px";
}

// ===== SEND EMAIL =====
function sendEmail(event) {
  event.preventDefault();

  window.alert("Sending your message...");

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  // Send mail to YOU
  emailjs.send("service_2mesjcl", "TEMPLATE_ADMIN", params)
    .then(() => {

      // Auto reply to USER
      emailjs.send("service_2mesjcl", "TEMPLATE_USER", params);

      window.alert(
        "Thank you for contacting me!\n\n" +
        "Your message has been sent successfully.\n" +
        "A confirmation email has been sent to your email address."
      );

      document.querySelector("form").reset();
    })
    .catch(error => {
      window.alert(
        "Oops! Something went wrong.\n" +
        "Please try again later."
      );
      console.error(error);
    });
}
