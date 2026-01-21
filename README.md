# 📘 Blog CRUD API

**Node.js · Express · MongoDB Atlas · Mongoose**

---

## 📌 Project Overview

This project is a **simple blogging platform** built using **Node.js**, **Express**, and **MongoDB Atlas**.
It provides a fully functional **CRUD (Create, Read, Update, Delete) REST API** along with a basic frontend interface for interacting with the API.

The project was developed as an **individual assignment** to practice backend and full-stack development concepts.

---

## 🛠️ Technologies Used

* **Node.js**
* **Express.js**
* **MongoDB Atlas**
* **Mongoose (ODM)**
* **HTML, CSS, JavaScript**
* **Postman** (for API testing)

---

## 📂 Project Structure

```
blog-crud-api/
│
├── models/
│   └── Blog.js
│
├── routes/
│   └── blogRoutes.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 🗄️ Database (MongoDB Atlas)

The project uses **MongoDB Atlas**, a cloud-based NoSQL database.

### 🔹 Database Details

* **Database Name:** `blogdb`
* **Collection Name:** `blogs`
* **Database Type:** NoSQL (Document-oriented)

The database and collection are created automatically when the first blog post is added.

---

### 🔹 Connection Method

The application connects to MongoDB Atlas using **Mongoose**.
The connection string is stored securely in environment variables.

```env
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/blogdb?retryWrites=true&w=majority
```

> ⚠️ Sensitive data (username and password) is not committed to the repository.

---

### 🔹 Blog Document Example

```json
{
  "_id": "65f1c8a9c3b1a1e4f8a12345",
  "title": "My First Blog",
  "body": "This is the content of the blog post.",
  "author": "Anonymous",
  "createdAt": "2026-01-20T10:15:30.000Z",
  "updatedAt": "2026-01-20T10:15:30.000Z"
}
```

---

## ⚙️ Setup and Installation

### 1️⃣ Clone the repository

```bash
git clone <repository-url>
cd blog-crud-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Environment Variables

Create a `.env` file in the project root:

```env
PORT=5000
MONGO_URI=mongodb+srv://USERNAME:PASSWORD@cluster0.xxxxx.mongodb.net/blogdb?retryWrites=true&w=majority
```

> Make sure MongoDB Atlas **IP Access List** allows your IP (`0.0.0.0/0` for development).

---

## ▶️ Running the Application

```bash
npm start
```

Expected output:

```
MongoDB Atlas connected (Mongoose)
Server running on port 5000
```

---

## 🔌 API Endpoints

| Method | Endpoint     | Description                |
| ------ | ------------ | -------------------------- |
| POST   | `/blogs`     | Create a new blog post     |
| GET    | `/blogs`     | Retrieve all blog posts    |
| GET    | `/blogs/:id` | Retrieve a blog post by ID |
| PUT    | `/blogs/:id` | Update a blog post by ID   |
| DELETE | `/blogs/:id` | Delete a blog post by ID   |

---

## 🧾 Blog Schema

Each blog post includes:

* **title** – String (required)
* **body** – String (required)
* **author** – String (optional, default: `"Anonymous"`)
* **createdAt** – Date (auto-generated)
* **updatedAt** – Date (auto-generated)

---

## ✅ Data Validation & Error Handling

* Validation ensures **title** and **body** are provided
* Errors are handled using `try/catch`
* Appropriate HTTP status codes are returned:

  * `400` – Bad request
  * `404` – Not found
  * `500` – Server error

---

## 🧪 Testing

The API was tested manually using **Postman**, including:

* Creating blog posts
* Fetching all posts
* Fetching posts by ID
* Updating posts
* Deleting posts

---

## 🖥️ Frontend Interface

A simple frontend interface is included:

* Form to create blog posts
* Display of all blog posts
* Delete functionality

Access the frontend at:

```
http://localhost:5000
```

## 📌 Conclusion

This project demonstrates:

* RESTful API development with Node.js and Express
* Cloud database integration using MongoDB Atlas
* Clean project structure and best practices
* Basic full-stack development skills

---

## 📄 License

This project is created for **educational purposes only**.

---
