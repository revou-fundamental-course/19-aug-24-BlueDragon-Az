function replaceName() {
    var name = prompt("Hey there! What's your name?", "");
    document.getElementById("name").innerHTML = name
}
replaceName();

const form = document.getElementById("myForm");
const outputNama = document.getElementById("outputNama");
const outputEmail = document.getElementById("outputEmail");
const outputPesan = document.getElementById("outputPesan");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah formulir dikirim
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;
    
    outputNama.textContent = nama;
    outputEmail.textContent = email;
    outputPesan.textContent = pesan;
    
    // Tampilkan div #formOutput
    document.getElementById("formOutput").style.display = "block";

    document.getElementById("nama").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pesan").value = "";
});

let indexSlide = 1;
showBanner(1);

function nextSlide(n){
    showBanner (indexSlide += n);
}


