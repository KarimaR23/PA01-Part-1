console.log("Welcome to my JS page!");
console.log("Repo: https://github.com/KarimaR23/PA01-Part-1.git");

const userName = "Karima";        // string
let age = 20;                     // number
let isStudent = true;             // boolean
const hobbies = ["coding", "music", "travel"]; // array
const user = { name: "Karima", major: "IT" };  // object
let extraData = null;             // null

// Operators
let result = age + 5;             // arithmetic
console.log(age === 20);          // strict comparison
console.log(isStudent && true);   // logical

// ==========================
// DOM Elements
// ==========================
const form = document.getElementById("userForm");
const statusDiv = document.getElementById("status");
const itemList = document.getElementById("itemList");
const results = document.getElementById("results");
const fetchBtn = document.getElementById("fetchBtn");
const sortBtn = document.getElementById("sortBtn");

let fetchedData = [];

function renderStaticList() {
    itemList.innerHTML = "";

    for (let i = 0; i < hobbies.length; i++) {
        const li = document.createElement("li");
        li.textContent = hobbies[i];
        itemList.appendChild(li);
    }
}

renderStaticList();


// VALIDATION (CONTROL FLOW)

function validateEmail(email) {
    if (email.includes("@") && email.length > 5) {
        return true;
    } else {
        return false;
    }
}

// FORM EVENT

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (validateEmail(email)) {
        statusDiv.textContent = "✅ Valid email!";
    } else {
        statusDiv.textContent = "❌ Invalid email!";
    }
});


// FETCH FUNCTIONS

function renderList(data) {
    results.innerHTML = "";

    data.slice(0, 10).forEach(item => {
        const div = document.createElement("div");
        div.textContent = item.name;
        results.appendChild(div);
    });
}

function handleError(error) {
    results.textContent = "Error loading data.";
    console.error(error);
}

function filterData(data) {
    return data.filter(user => user.name);
}

