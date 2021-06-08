const contact = document.querySelector(".contact-form");
const contactinputs = document.querySelectorAll(".contact-input");
const nameinput = document.querySelector(".contact-input-name");
const emailinput = document.querySelector(".contact-input-email");
const messageinput = document.querySelector(".contact-input-message");
const nameerror = document.querySelector(".nameerror");
const emailerror = document.querySelector(".emailerror");
const messageerror = document.querySelector(".messageerror");
const sendfaileddiv = document.querySelector(".contact-sendfailed");
const sendsucceededdiv = document.querySelector(".contact-sendsucceeded");
const button = document.querySelector(".contact-form-btn");
function post(url, data, callback, errorcallback) {
 const xhr = new XMLHttpRequest();
 xhr.open("POST", url);
 xhr.setRequestHeader("Accept", "application/json");
 xhr.onload = function () {
  if (xhr.status === 200) {
   callback(xhr.responseText);
  } else if (xhr.status !== 200) {
   errorcallback(xhr.responseText);
  }
 };
 xhr.send(encodeURI(data));
}

if (contact) {
 contact.addEventListener("submit", (e) => {
  e.preventDefault();
  sendfaileddiv.classList.remove("show-message");
  sendsucceededdiv.classList.remove("show-message");
  nameerror.classList.remove("show-message");
  emailerror.classList.remove("show-message");
  messageerror.classList.remove("show-message");
  const name = nameinput.value.trim();
  const email = emailinput.value.trim();
  const message = messageinput.value.trim();
  let error = false;
  let fatalerror = false;
  const messages = [];

  if (name.length < 2) {
   error = true;
   nameerror.classList.add("show-message");
  }
  if (email.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) === -1) {
   error = true;
   emailerror.classList.add("show-message");
  }
  if (message.length < 2) {
   error = true;
   messageerror.classList.add("show-message");
  }
  if (fatalerror) {
   return false;
  }
  if (error) {
   return false;
  }
  const params = [];
  for (let i = 0; i < contactinputs.length; i++) {
   const input = contactinputs[i];
   params.push(`${input.name}=${input.value}`);
  }

  button.innerHTML = "Sending...";

  post(
   e.target.getAttribute("action"),
   params.join("&"),
   function (text) {
    contact.reset();
    sendsucceededdiv.classList.add("show-message");
    button.innerHTML = '<svg aria-hidden="true" role="img" class="button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg> Send';
   },
   function (text) {
    sendfaileddiv.classList.add("show-message");
    button.innerHTML = '<svg aria-hidden="true" role="img" class="button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path></svg> Send';
   }
  );
 });
}
