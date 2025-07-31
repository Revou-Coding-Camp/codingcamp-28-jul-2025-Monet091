console.log("Script loaded successfully!");

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('customForm');
    const resultDiv = document.getElementById('formResult');

    // Nama sambutan
    const nameForm = document.getElementById('nameForm');
    const inputName = document.getElementById('inputName');
    const mainContent = document.querySelector('#home .main-content');
    const welcomeText = document.getElementById('welcomeText');

    if (nameForm) {
        nameForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = inputName.value.trim();
            if (name) {
                welcomeText.textContent = `Hi ${name}! Welcome Back`;
                mainContent.style.display = 'block';
                nameForm.style.display = 'none';
            }
        });
    }

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = form.name.value;
            const dob = form.dob.value;
            const gender = form.gender.value;
            const message = form.message.value;
            const currentTime = new Date().toLocaleString();

            resultDiv.innerHTML = `
                <h3>Hasil Form:</h3>
                <p><strong>Nama:</strong> ${name}</p>
                <p><strong>Tanggal Lahir:</strong> ${dob}</p>
                <p><strong>Jenis Kelamin:</strong> ${gender}</p>
                <p><strong>Pesan:</strong> ${message}</p>
                <p><strong>Waktu Submit:</strong> <span id="liveTime">${currentTime}</span></p>
            `;
        });
    }
});