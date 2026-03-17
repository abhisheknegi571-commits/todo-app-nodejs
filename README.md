# 📝 To-Do App

A full-stack task management web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** templating. Users can register, log in, and manage their tasks with priority levels, search, and completion tracking.

---

## 🚀 Features

- **User Authentication** — Register and login with session-based auth
- **Add Tasks** — Create tasks with a title, description, and priority level
- **Edit & Delete Tasks** — Update or remove any task
- **Mark as Complete** — Toggle task completion status
- **Priority Filter** — Filter tasks by High, Medium, or Low priority
- **Search Tasks** — Search tasks by title
- **Flash Messages** — Success and error notifications
- **Responsive UI** — Works on desktop, tablet, and mobile

---

## 🛠️ Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Runtime    | Node.js             |
| Framework  | Express.js          |
| Database   | MongoDB + Mongoose  |
| Templating | EJS                 |
| Auth       | express-session     |
| Flash      | connect-flash       |
| Styling    | Custom CSS (dark theme) |

---

## 📁 Folder Structure

```
├── controllers/
│   ├── taskController.js
│   └── userController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   ├── taskModel.js
│   └── userModel.js
├── public/
│   └── css/
│       └── navbar.css
├── routes/
│   ├── taskRoutes.js
│   └── userRoutes.js
├── views/
│   ├── navbar.ejs
│   ├── list.ejs
│   ├── add.ejs
│   ├── update.ejs
│   ├── login.ejs
│   └── signup.ejs
├── index.js
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-username/todo-app.git
cd todo-app
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file in the root directory

```env
MONGO_URI=your_mongodb_connection_string
SESSION_SECRET=your_secret_key
PORT=3000
```

### 4. Start the server

```bash
node index.js
```

Or with nodemon (auto-restart on changes):

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:3000
```

---

## 🔐 Environment Variables

| Variable        | Description                        |
|-----------------|------------------------------------|
| `MONGO_URI`     | MongoDB connection string          |
| `SESSION_SECRET`| Secret key for session encryption  |
| `PORT`          | Port number (default: 3000)        |

---

## 📌 Routes Overview

### Task Routes

| Method | Route               | Access    | Description              |
|--------|---------------------|-----------|--------------------------|
| GET    | `/`                 | Public    | View all tasks           |
| GET    | `/search`           | Public    | Search tasks by title    |
| GET    | `/priority/:level`  | Public    | Filter by priority       |
| GET    | `/add`              | Protected | Show add task form       |
| POST   | `/add`              | Protected | Create new task          |
| GET    | `/update/:id`       | Protected | Show edit task form      |
| POST   | `/update/:id`       | Protected | Update task              |
| GET    | `/delete/:id`       | Protected | Delete task              |
| GET    | `/complete/:id`     | Protected | Toggle task completion   |

### User Routes

| Method | Route      | Description        |
|--------|------------|--------------------|
| GET    | `/login`   | Show login page    |
| POST   | `/login`   | Login user         |
| GET    | `/signup`  | Show signup page   |
| POST   | `/signup`  | Register new user  |
| GET    | `/logout`  | Logout user        |

---

## 🖼️ Screenshots

> Add screenshots of your app here after deployment.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).