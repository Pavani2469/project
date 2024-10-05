const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
import otphandler from './path-to-folder/otp-handler';
 // Custom OTP handler module

const app = express();
const PORT = 3000;

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Serve static files like HTML, CSS, JS
app.use(express.static(path.join(__dirname, '../')));

// Route to serve the login page (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});

// Route to serve the home page (home.html) after login and OTP verification
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../home.html'));
});

// API endpoint to handle login and send OTP
app.post('/send-otp', (req, res) => {
    const { aadharNumber, password } = req.body;

    // Validate input (in a real app, you would also check the password)
    if (aadharNumber && password) {
        // Simulate sending OTP to the user's mobile
        const otp = otpHandler.sendOtp(aadharNumber);
        res.status(200).json({ message: "OTP sent successfully", otp });
    } else {
        res.status(400).json({ message: "Invalid Aadhaar number or password" });
    }
});

// API endpoint to verify OTP
app.post('/verify-otp', (req, res) => {
    const { userOtp, realOtp } = req.body;

    // Verify OTP (in a real app, use secure methods)
    if (otpHandler.verifyOtp(userOtp, realOtp)) {
        res.status(200).json({ message: "OTP verified successfully" });
    } else {
        res.status(400).json({ message: "Invalid OTP" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
