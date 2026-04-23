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
