// 1. Setup & Console
console.log("Welcome to my Javascript part2 Project!");
console.log("Repo:https://github.com/KarimaR23/PA01-Part-1.git");

// 2. Variables, Types, & Operators
const appState = {
    appName: "Data Explorer", // String
    version: 1.2,             // Number
    isLoading: false,         // Boolean
    items: [],                // Array
    config: { theme: "dark" },// Object
    lastError: null           // Null/Undefined case
};

// 3. Functions & Decomposition
const validateInput = (val) => {
    // Logic: Strict comparison and length check
    if (val === "" || val.length < 3) {
        return false;
    }
    return true;
};

const renderList = (dataArray) => {
    const list = document.querySelector('#data-list');
    list.innerHTML = ''; // Clear previous

    if (dataArray.length === 0) {
        list.innerHTML = '<li>No items found.</li>';
        return;
    }

    // Loop to render items
    dataArray.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.title || item.name; // Adjust based on your API
        list.appendChild(li);
    });
};

// 4. Fetch with Async/Await
async function fetchData() {
    const status = document.getElementById('status');
    const list = document.getElementById('data-list');
    
    status.textContent = "Loading..."; // Loading state
    list.innerHTML = '';

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error("Failed to fetch");
        
        const data = await response.json();
        appState.items = data.slice(0, 10); // Take first 10
        renderList(appState.items);
        status.textContent = "Data loaded successfully!";
    } catch (error) {
        status.textContent = `Error: ${error.message}`;
    }
}

// 5. DOM & Events
document.getElementById('fetch-btn').addEventListener('click', () => {
    const inputVal = document.getElementById('user-input').value;
    
    // Control Flow / Validation
    if (validateInput(inputVal)) {
        fetchData();
    } else {
        document.getElementById('status').textContent = "Invalid input: Use at least 3 chars.";
    }
});

document.getElementById('sort-btn').addEventListener('click', () => {
    // Array Method & Re-render
    appState.items.sort((a, b) => a.title.localeCompare(b.title));
    renderList(appState.items);
});
