const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = document.querySelector("#fullName").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const country = document.querySelector("#country").value;
  const phone = document.querySelector("#phone").value;
  const walletAddress = document.querySelector("#walletAddress").value;

  const res = await fetch("https://imperial-trading-lmt-backend.glitch.me/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      fullName,
      email,
      password,
      country,
      phone,
      walletAddress
    })
  });

  const data = await res.json();
  if (res.ok) {
    alert("Registration successful!");
    // optionally redirect to login: window.location.href = "/login.html";
  } else {
    alert(data.error || "Something went wrong.");
  }
});
