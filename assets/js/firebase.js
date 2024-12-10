const firebaseConfig = {
    apiKey: "AIzaSyBPxtuqx_3q6gtpAn7MeuVbqzJrjoKzR2s",
    authDomain: "eddiefolio.firebaseapp.com",
    databaseURL: "https://eddiefolio-default-rtdb.firebaseio.com/",
    projectId: "eddiefolio",
    storageBucket: "eddiefolio.appspot.com",
    messagingSenderId: "1032147218531",
    appId: "1:1032147218531:web:db600ddb1db0bcb4868856",
    measurementId: "G-GV843X5GE9"
};

var kwargsvc = "service_pkujqbq"
var kwargstid = "template_2zfgk5n"
var kwargsuid = "Dw0k96FQwqcfUTl5o"

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Get the form element
var form = document.getElementById("contact-form");

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // get time and date
    var date = new Date();
    // Save data to Firebase Realtime Database
    var newFormData = database.ref().child("client_reachout").push();
    newFormData.set({
        name: name,
        email: email,
        service: [],
        message: message,
        time_sent: date.toString()
    });

    var data = {
        service_id: kwargsvc,
        template_id: kwargstid,
        user_id: kwargsuid,
        template_params: {
            'name': name,
            'email': email,
            'service': '',
            'message': message,
            'time_sent': date.toString(),
            'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
        }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
        type: 'POST',
        data: JSON.stringify(data),
        contentType: 'application/json'
    }).done(function () {
        document.getElementById("msg").innerHTML = "Auto response Email Sent.."
    }).fail(function (error) {
        document.getElementById("msg").innerHTML = "Auto response failed.."
    });

    // Show success message
    document.getElementById("msg").innerHTML = "Message Received!"

    // Clear form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    var time_out = setTimeout(() => {
        document.getElementById("msg").innerHTML = ""
        clearTimeout(time_out)
    }, 2000)
});
