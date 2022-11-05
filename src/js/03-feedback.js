import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(getFormData, 500)); ///throttle??
form.addEventListener('submit', onSubmit);

function getFormData() {
    const formEl = form.elements;
    let email = formEl.email.value;
    let message = formEl.message.value;
    const formData = { email, message };
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
    console.log(formData);
}
    if (localStorage.getItem("feedback-form-state")) {
        // try {
        //   JSON.parse(formData);
        // } catch (error) {
        // }
        const data = JSON.parse(localStorage.getItem("feedback-form-state"));
        input.value = data.email;
        textarea.value = data.message;
    }

function onSubmit(event) {
    event.preventDefault();
    localStorage.removeItem("feedback-form-state");
    event.currentTarget.reset();
    
}