const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: "This field is required"
    },
    email: {
        type: String
    },
    password: {
        type: String,
        required: [true, 'password required'],
        minlength: [5, 'Minimun password should be of 5 characters']
    },
    mobile: {
        type: String,
        required: [true, 'mobile number required'],
        minlength: [10, 'Mobile number of should be of 10 digits']
    },
    city: {
        type: String,
        required: [true, 'city required']
    }
});

// Custom validation for email
studentSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Student', studentSchema);