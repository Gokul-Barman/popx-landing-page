# PopX Frontend User Flow

A clean, responsive mobile-first authentication and account profile workflow built with **React**, **Tailwind CSS**, and optimized state/form management tools.

## 🛠️ Tech Stack & Architecture

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS (Custom Floating Label UI Utility Classes)
* **State Management:** Zustand (with Session Persistence Middleware)
* **Form Architecture:** React Hook Form (Uncontrolled Inputs for zero keystroke lag)
* **Routing Engine:** React Router DOM v6

---

## ⚡ Key Engineering Features

* **Persistent Global State:** Utilizes a decoupled Zustand slice store utilizing `persist` middleware to map user registration schemas onto client-side browser `localStorage`, bypassing the need for a bulky backend instance during UI validation tests.
* **Performant Form Handling:** Replaced traditional controlled state-driven input components with React Hook Form, eliminating recursive global component tree re-renders during text entry.
* **Smart Action States:** The main submission controls selectively observe field input string parameters using `watch()`, dynamically alternating layout styling classes (`btn-css` vs `btn-dis`) and toggling interactive properties.

---


