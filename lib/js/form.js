const contact = document.querySelector('.contact-form');
const contactinputs = document.querySelectorAll('.contact-input');
const nameinput = document.querySelector('.contact-input-name');
const emailinput = document.querySelector('.contact-input-email');
const messageinput = document.querySelector('.contact-input-message');
const nameerror = document.querySelector('.nameerror');
const emailerror = document.querySelector('.emailerror');
const messageerror = document.querySelector('.messageerror');
const sendfaileddiv = document.querySelector('.contact-sendfailed');
const sendsucceededdiv = document.querySelector('.contact-sendsucceeded');
const button = document.querySelector('.contact-form-btn');
function post(url, data, callback, errorcallback) {
const xhr = new XMLHttpRequest();
xhr.open('POST', url);
xhr.setRequestHeader("Accept", "application/json");
xhr.onload = function() {
if (xhr.status === 200) {
callback(xhr.responseText);
} else if (xhr.status !== 200) {
errorcallback(xhr.responseText);
}
};
xhr.send(encodeURI(data));
}

if (contact) {
contact.addEventListener('submit', (e) => {
e.preventDefault();
sendfaileddiv.style.display = 'none';
sendsucceededdiv.style.display = 'none';
nameerror.style.opacity = '0';
nameerror.style.visibility = 'hidden';
emailerror.style.opacity = '0';;
emailerror.style.visibility = 'hidden';
messageerror.style.opacity = '0';
messageerror.style.visibility = 'hidden';
const name = nameinput.value.trim();
const email = emailinput.value.trim();
const message = messageinput.value.trim();
let error = false;
let fatalerror = false;
const messages = [];

if (name.length < 2) {
error = true;
nameerror.style.opacity = '1';
nameerror.style.visibility = 'visible';
}
if (email.search(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) === -1) {
error = true;
emailerror.style.opacity = '1';
emailerror.style.visibility = 'visible';
}
if (message.length < 2) {
error = true;
messageerror.style.opacity = '1';
messageerror.style.visibility = 'visible';
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
params.push(`${ input.name }=${ input.value }`);
}

button.innerHTML = "Sending...";

post(
e.target.getAttribute('action'),
params.join('&'),
function(text){
contact.reset();
sendsucceededdiv.style.display = 'block';
button.innerHTML = "Send";
},
function(text){
sendfaileddiv.style.display = 'block';
button.innerHTML = "Send";
}
);
});
}