# Lesson 05 — Forms and Validation

## Lesson purpose

Forms collect information from users. JavaScript can validate that information, explain what needs correction, and guide the user through a successful submission. The original signup practical is useful for learning DOM forms and validation, but it is not a secure authentication implementation.

## Learning outcomes

Learners should be able to read form values, handle a submit event, prevent unwanted page reloads, validate multiple fields, display field-level errors, and explain the difference between front-end validation and server-side validation.

## 1. Read values from a form

```html
<form id="signup-form">
  <label for="full-name">Full name</label>
  <input id="full-name" name="fullName" required>

  <label for="email">Email</label>
  <input id="email" name="email" type="email" required>

  <button type="submit">Create account</button>
</form>
<script src="./script.js" defer></script>
```

```js
const form = document.getElementById("signup-form");

form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(form);
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  console.log({ fullName, email });
});
```

The `submit` event runs when the user submits the form. `preventDefault()` stops the browser's normal navigation so the example can process the data itself. `FormData` reads named controls; each control needs a `name` attribute to be included.

## 2. Validate input

Validation checks whether submitted values meet the application's rules. Keep validation logic in a function so it can be tested independently.

```js
function validateSignup(data) {
  const errors = {};

  if (data.fullName.length < 2) {
    errors.fullName = "Enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (data.password.length < 8) {
    errors.password = "Use at least 8 characters.";
  }

  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  if (!data.acceptedTerms) {
    errors.terms = "You must accept the terms.";
  }

  return errors;
}
```

This is a teaching-level validation example, not a complete email-address specification or password policy. Real requirements should be defined by the product and enforced on the server as well.

A phone number should not be validated by assuming every country uses the same number of digits. Use an explicit country-aware rule or a suitable phone-number library when a real application needs international phone validation.

## 3. Display errors

HTML:

```html
<label for="email">Email</label>
<input id="email" name="email" type="email" aria-describedby="email-error">
<p id="email-error" role="alert"></p>
```

JavaScript:

```js
function displayErrors(errors) {
  document.getElementById("email-error").textContent = errors.email ?? "";
}
```

Use `textContent` for error messages. Associate the message with its input using `aria-describedby`. In a full form, clear previous errors before displaying the latest validation result.

## 4. Complete the submission flow

```js
form.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = {
    fullName: String(formData.get("fullName") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    password: String(formData.get("password") ?? ""),
    confirmPassword: String(formData.get("confirmPassword") ?? ""),
    acceptedTerms: formData.get("terms") === "on"
  };

  const errors = validateSignup(data);
  displayAllErrors(errors);

  if (Object.keys(errors).length > 0) {
    return;
  }

  console.log("Form is valid. A real app would send it to a server.");
});
```

`Object.keys(errors)` returns an array of the error object's own enumerable keys. If its length is zero, no validation errors were recorded.

## 5. Authentication: important distinction

The repository's signup example stores user objects in `localStorage`, including passwords. This is acceptable only as a deliberately isolated demonstration of arrays, JSON and browser storage. It is not acceptable for a real app.

Why it is unsafe:

- JavaScript running on the same origin can read localStorage.
- A cross-site scripting (XSS) vulnerability could expose stored credentials.
- A browser-only check cannot prove a user's identity.
- Client-side code can be modified or bypassed by the user.

A real authentication flow sends credentials over HTTPS to a server. The server validates the request, stores a password hash using a suitable password-hashing algorithm, and creates a secure session or token according to the application's architecture. Never store a plaintext password in localStorage, sessionStorage or a normal database column.

## Guided practice

Build a registration form with full name, email, password, confirm password and terms acceptance. Show one clear error per invalid field. If validation succeeds, display a success message but do not store the password.

## Independent exercises

1. Make the email field required and show a helpful error.
2. Validate that the password has at least eight characters.
3. Ensure the confirm-password field matches the password.
4. Add an error summary that receives keyboard focus when validation fails.
5. Disable the submit button while a simulated request is pending, then re-enable it.
6. Explain why client-side validation cannot replace server-side validation.

## Review questions

- Why do we listen for the submit event instead of only the button click?
- What does `preventDefault()` do?
- Why should validation be a separate function?
- Why is `textContent` a safer default for displaying user-provided text?
- Why must a real application never save plaintext passwords in localStorage?

## Lesson recap

A form collects input; JavaScript reads and validates it, then communicates errors clearly. Front-end validation improves usability but can be bypassed. Authentication requires a trusted server and secure password handling.
