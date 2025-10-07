let balance = 0;

window.onload = () => {
  document.getElementById('login-page').style.display = 'block';
};

function login() {
  const user = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const error = document.getElementById('error');

  if (user === "admin" && pass === "1234") {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('user').innerText = user;
  } else {
    error.innerText = "❌ Invalid username or password";
  }
}

function showRecharge() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('recharge-page').style.display = 'block';
}

function showWithdraw() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('withdraw-page').style.display = 'block';
}

function backToDashboard() {
  document.getElementById('recharge-page').style.display = 'none';
  document.getElementById('withdraw-page').style.display = 'none';
  document.getElementById('dashboard').style.display = 'block';
}

function confirmRecharge() {
  const amount = parseInt(document.getElementById('recharge-amount').value);
  const sender = document.getElementById('sender-id').value;

  if (amount && sender) {
    balance += amount;
    document.getElementById('balance').innerText = balance;
    alert("✅ Recharge successful! Rs." + amount + " added to your wallet.");
    backToDashboard();
  } else {
    alert("⚠️ Please enter valid amount and eSewa ID!");
  }
}

function confirmWithdraw() {
  const amount = parseInt(document.getElementById('withdraw-amount').value);
  const id = document.getElementById('withdraw-id').value;

  if (amount < 1000) {
    alert("⚠️ Minimum withdraw is Rs.1000");
  } else if (amount > balance) {
    alert("❌ Insufficient balance!");
  } else if (id === "") {
    alert("⚠️ Please enter your eSewa/Khalti ID!");
  } else {
    balance -= amount;
    document.getElementById('balance').innerText = balance;
    alert("✅ Withdraw request of Rs." + amount + " sent to " + id);
    backToDashboard();
  }
}

function logout() {
  document.getElementById('dashboard').style.display = 'none';
  document.getElementById('login-page').style.display = 'block';
  balance = 0;
  document.getElementById('balance').innerText = 0;
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
    }
