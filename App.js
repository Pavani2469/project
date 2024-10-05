function sendOtp() {
    const aadharNumber = document.getElementById("aadhar").value;
    const password = document.getElementById("password").value;
    
    if (aadharNumber && password) {
        // Simulate OTP process (you will integrate actual OTP API here)
        alert("OTP sent to your registered mobile number.");
        document.getElementById("otpSection").style.display = "block";
    } else {
        alert("Please enter valid Aadhaar number and password.");
    }
}

function verifyOtp() {
    const otp = document.getElementById("otp").value;
    
    if (otp === "1234") { // Simulated OTP check
        alert("OTP Verified. Redirecting to the home page...");
        window.location.href = "home.html"; // Redirect to home page
    } else {
        alert("Invalid OTP. Please try again.");
    }
}
