// ================= DARK MODE =====================
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  darkToggle.textContent = 
    document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// ================= VISITOR MODE ==================
const visitorBtn = document.getElementById("visitorModeBtn");

if (visitorBtn) {
  visitorBtn.addEventListener("click", () => {
    alert("Visitor Mode Activated!\nWelcome to Mohamed Essam’s Portfolio.");
    console.log("Visitor joined at: " + new Date().toLocaleString());
  });
}

// ================= LOG CV DOWNLOAD ===============
const cvDownload = document.querySelector(".primary-btn");

if (cvDownload) {
  cvDownload.addEventListener("click", () => {
    console.log("CV downloaded at: " + new Date().toLocaleString());
  });
}

// ================= CONTACT FORM MESSAGE ==========
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", () => {
    alert("Your message has been sent successfully!");
  });
}

// ================= UPLOAD CV FEATURE =============
// Button to upload your own CV and replace the old link
const uploadInput = document.createElement("input");
uploadInput.type = "file";
uploadInput.accept = ".pdf";
uploadInput.style.display = "none";
document.body.appendChild(uploadInput);

// Create upload button
const uploadBtn = document.createElement("button");
uploadBtn.className = "btn outline-btn";
uploadBtn.textContent = "Upload My CV";
uploadBtn.style.marginTop = "20px";

// Append button under hero section
document.querySelector(".hero-buttons").appendChild(uploadBtn);

// Handle file selection
uploadBtn.addEventListener("click", () => {
  uploadInput.click();
});

uploadInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // Show file name
  alert("New CV Uploaded: " + file.name);

  // Replace CV download link dynamically
  const newUrl = URL.createObjectURL(file);
  const downloadCv = document.querySelector(".primary-btn");

  if (downloadCv) {
    downloadCv.href = newUrl;
    downloadCv.setAttribute("download", file.name);
  }

  console.log("CV Updated: " + file.name);
});
