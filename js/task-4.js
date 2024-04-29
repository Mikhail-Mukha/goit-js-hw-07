
const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const elements = event.currentTarget.elements;
    const formData = {};

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        if (element.nodeName === "INPUT") {
            const value = element.value.trim();
            formData[element.name] = value;
        }
    }

    if (Object.values(formData).some(value => value === "")) {
        alert('All form fields must be filled in');
        return;
    }

    console.log(formData);
    form.reset();
}