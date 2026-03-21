# Todo App (Node.js + Express + MongoDB)

A full stack To-Do application built using Node.js, Express.js and MongoDB that allows users to manage their daily tasks efficiently. Users can register, login and perform CRUD operations on tasks with priority management.

## Live Demo
https://todo-app-nodejs-ten.vercel.app

## Features

- User Authentication (Register/Login/Logout)
- Session based authentication
- Create new tasks
- Edit tasks
- Delete tasks
- Task priority (High / Medium / Low)
- Filter tasks by priority
- Task status tracking (Completed / Pending)
- Dashboard with task counters
- Responsive UI

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Frontend
- EJS
- CSS
- JavaScript

### Other Tools
- Express Session
- dotenv
- GitHub
- Vercel Deployment

## Project Structure

```
todo-app-nodejs/
│
├── controllers/
├── middleware/
├── models/
├── routes/
├── views/
├── public/
├── config/
├── .env
├── index.js
└── package.json
```

## Installation & Setup

### 1 Clone repository

```
git clone https://github.com/abhisheknegi571-commits/todo-app-nodejs.git
```

### 2 Go to project folder

```
cd todo-app-nodejs
```

### 3 Install dependencies

```
npm install
```

### 4 Create .env file

Add:

```
MONGO_URL=your_mongodb_connection
SESSION_SECRET=your_secret_key
```

### 5 Run project

```
npm start
```

Server runs on:

```
http://localhost:3000
```

## API Routes

### Auth Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /login | Login page |
| POST | /login | User login |
| GET | /register | Register page |
| POST | /register | User registration |
| GET | /logout | Logout user |

### Task Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /tasks | Get all tasks |
| GET | /add | Add task page |
| POST | /add | Create task |
| GET | /update/:id | Edit task page |
| POST | /update/:id | Update task |
| GET | /delete/:id | Delete task |

## Learning Outcomes

Through this project I learned:

- MVC Architecture
- REST API development
- Authentication implementation
- MongoDB database integration
- Middleware usage
- Error handling
- Deployment process

## Future Improvements

- JWT Authentication
- Password hashing (bcrypt)
- API documentation (Swagger)
- Dark mode
- Search functionality
- Pagination
- Email notifications

## Screenshots

(Add screenshots here)

## Author

**Abhishek Negi**

BCA Final Year Student  
Aspiring Backend Developer

## Contact

GitHub:
https://github.com/abhisheknegi571-commits

## License

This project is for learning purposes.
