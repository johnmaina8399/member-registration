// 1. Select the form
const form = document.querySelector("form");

// 2. Select all form fields
const fields = document.querySelectorAll("input, select, textarea");

// 3. Select error messages
const errors = document.querySelectorAll(".error");

// 4. Select other elements
const successMessage = document.querySelector("#success-message");
const memberList = document.querySelector("#member-list");
const memberCounter = document.querySelector("#member-counter");
const darkModeButton = document.querySelector("#dark-mode");

// 5. Check elements in the console
console.log("Form:", form);
console.log("Fields:", fields);
console.log("Errors:", errors);
console.log("Success message:", successMessage);
console.log("Member list:", memberList);
console.log("Member counter:", memberCounter);
console.log("Dark mode button:", darkModeButton);
