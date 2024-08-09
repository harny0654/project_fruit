function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    // var errorMessage = document.getElementById('error-message');

 
    if (username === null || username === "") {
        alert("กรุณากรอก 'ชื่อผู้ใช้' ")
        return false;
    }

    if (username !== "admin" || password !== "password123") {
        // errorMessage.textContent = "Invalid username or password.";
        alert("กรุณากรอก 'รหัสผ่าน' ")
        return false;
    }

    
    alert("Login successful!");
    return true;
}