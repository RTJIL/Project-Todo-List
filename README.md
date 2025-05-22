# Just Readme 

A clean and functional To-Do List web app built using **modular vanilla JavaScript**. This app lets you add, view, edit, and delete tasks inside an **Inbox** section, complete with due dates and priority tags. It stores tasks in `localStorage` so your data sticks around even after refreshes.

---

## 🚀 Features

- 📥 **Inbox view** to manage all your tasks
- ➕ Add tasks with:
  - Title/description
  - Due date
  - Priority (low/medium/high)
- 📝 Edit existing tasks
- ❌ Delete tasks
- ✅ Mark tasks as complete
- 💾 Auto-saves to `localStorage`

---

## 🧠 What I Learned

Building this project helped me level up on:

### 🔹 **Modular JavaScript**
- Learned how to structure JS files into clean, focused modules using ES6 imports/exports.
- Built reusable logic across files like `saveTaskTo.js`, `addInboxContent.js`, and `editTask.js`.

### 🔹 **DOM Manipulation**
- Got deep into creating, appending, and styling HTML elements dynamically with JS.
- Used `eventListeners` to make the UI interactive (editing, deleting, completing tasks).

### 🔹 **Local Storage**
- Learned how to persist data in the browser using `localStorage`.
- Built logic to load tasks on page reload and update them when edited or deleted.

### 🔹 **State Management**
- Realized why directly exporting mutable data (like `inboxTasks`) is a bad idea.
- Refactored code to use `getInboxTasks()` and `removeInboxTask()` functions to safely manage state.

### 🔹 **Separation of Concerns**
- Learned the importance of keeping data logic and UI rendering logic separate.
- Built a better architecture that makes the app easier to scale and debug.

---

## 🛠️ Tech Stack

- **HTML**
- **CSS** (custom styling)
- **JavaScript (ES6+)**
  - Modules
  - Closures & factory functions
  - DOM APIs
  - localStorage
