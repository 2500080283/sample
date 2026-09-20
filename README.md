# Web UI Components & Starter Kit (with Full-Stack Node.js Mock API)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)

> **Repository**: sample  
> **Author**: Ch. Prudhvi Raj  
> **Student ID**: 2500080283  
> **Institution**: KL University

---

## 📦 What's Inside

A practical toolkit of reusable, responsive UI components, lightweight HTML5 boilerplates, and a built-in Node.js / Express Mock REST API designed for rapid front-end prototyping.

### 🌟 Templates
- `starters/html5-starter/`: Production-ready baseline HTML5 template with SEO meta tags, responsive viewport configuration, and CSS reset.
- `starters/landing-starter/`: Modern, dark-themed hero landing page template.

### 🎨 Components
- Reusable CSS Button variants (Primary, Secondary, Success, Danger, Dark)
- Responsive content and feature cards
- Responsive grid and container layouts
- Interactive API Console & Feedback submission form

---

## 🛠️ Backend REST API Endpoints

A built-in Express mock server (`server.js`) on port `5050` powers dynamic prototyping and data hydration:

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/health` | Server status and environment info |
| `GET` | `/api/components` | Retrieve list of UI components and status metadata |
| `GET` | `/api/users` | Mock student and developer profiles for card/table testing |
| `GET` | `/api/submissions` | Retrieve all submitted component reviews |
| `POST` | `/api/feedback` | Submit and persist feedback to `data/submissions.json` |

---

## 📂 File Hierarchy

```
sample/
├── components/          # Modular component library
│   ├── buttons/
│   ├── cards/
│   └── modals/
├── data/
│   ├── mock.json        # Mock components and users catalog
│   └── submissions.json # Persistent feedback submissions
├── starters/
│   ├── html5-starter/   # Baseline boilerplate
│   └── landing-starter/ # Dark hero landing template
├── index.html           # Interactive showcase & API tester
├── server.js            # Node.js Express Mock API server
├── package.json         # Project metadata and dependencies
├── .gitignore           # Ignores node_modules
└── README.md            # Documentation and usage guide
```

---

## 🚀 How to Run Locally

### Option 1: Full-Stack Mode (Recommended)
```bash
# Clone the repository
git clone https://github.com/2500080283/sample.git

# Navigate into the folder
cd sample

# Install dependencies
npm install

# Start the mock backend server (runs on port 5050)
npm start
```
Open `http://localhost:5050` in your browser to interact with live API endpoints and test data submission.

### Option 2: Standalone Static Mode
Open `index.html` directly in any browser:
```bash
start index.html
```
*(If the backend is not running, the application seamlessly falls back to offline mode and saves test submissions to browser storage).*

---

&copy; 2026 Ch. Prudhvi Raj (2500080283) • KL University
