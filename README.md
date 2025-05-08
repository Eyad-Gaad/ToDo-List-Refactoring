# 📝 ToDo List Web Application

A clean, and fully responsive ToDo List web app built with **Vanilla JavaScript** , styled using **Tailwind CSS**, and enhanced with **Font Awesome** for icons. It supports full **CRUD operations** and stores tasks in the browser's **Local Storage** for persistent user experience.

---

## ✅ Features

- Add new tasks
- Update task completion status
- Delete existing tasks
- Display all tasks
- Search tasks dynamically
- Persist tasks using browser's Local Storage
- Responsive user interface with Tailwind CSS

---

## 🧠 Project Background

This application started as a simple ToDo list with:
- Unclear variable and function names  
- Mixed responsibilities and spaghetti code  
- No scalability or responsiveness  
- Poor code readability and styling

### 🔁 Refactoring Achievements

After a full refactor:
- Applied the **Single Responsibility Principle**
- Renamed variables and functions for clarity and semantics
- Applied **Tailwind CSS** for modern, responsive UI styling
- Integrated **Font Awesome** for icon clarity
- Ensured full compatibility across screen sizes

---

## 📂 Folder Structure
ToDo-List/
│
├── index.html
├── package.json
├── package-lock.json
│
├── js/
│ └── main.js # Main application logic
│
├── style/
│ ├── input.css # Tailwind CSS source
│ ├── output.css # Tailwind compiled CSS
│ └── all.min.css # Font Awesome CSS
│
├── webfonts/ # Font Awesome font files

---

## 🛠️ Tech Stack

| Technology      | Description                                   |
|----------------|-----------------------------------------------|
| HTML5           | Markup language                              |
| Vanilla JS      | Application logic (non-module)              |
| Tailwind CSS    | Utility-first CSS framework                 |
| Font Awesome    | Icon set used for edit/delete indicators     |
| Local Storage   | Storing user tasks persistently              |
| Node.js + npm   | Dependency management for Tailwind build     |

---

## 🚀 Getting Started

### 📦 Prerequisites
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 🔧 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Eyad-Gaad/ToDo-List-Refactoring.git
cd ToDo-List

# 2. Install dependencies
npm install

🖥️ Run the Project
Simply open index.html in your browser. No server or build tool is required unless you edit Tailwind source files (input.css).
