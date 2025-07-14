# 🍕 Pizza Delivery Web App

A full-stack pizza ordering application built during my Web Development & Designing Internship at **Oasis Infobyte**. This project includes user authentication, pizza customization, admin panel, and Razorpay payment integration.

---

## 🚀 Features

- 🔐 User login & registration with JWT
- 🍕 Build-your-own pizza interface
- 🛒 Cart, Checkout & Order management
- 💼 Admin Panel for order tracking
- 💳 Razorpay payment integration
- ⚡ Fast, responsive UI (React)
- 🌐 REST API using Node.js + Express
- 🗃️ MongoDB as the database

---

## 🧱 Tech Stack

**Frontend**
- React.js
- React Router
- Axios
- CSS3 / Bootstrap

**Backend**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- Razorpay SDK

---

## 📁 Folder Structure

/frontend
└── src
├── components
│ ├── Login.js
│ ├── Register.js
│ ├── PizzaBuilder.js
│ ├── Dashboard.js
│ └── AdminPanel.js
├── context
│ └── AuthContext.js
└── api.js

/backend
├── models/
├── routes/
├── controllers/
├── server.js
└── .env

yaml
Copy
Edit

---

## 🔧 How to Run Locally

### Backend Setup
```bash
cd backend
npm install
npm start
Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm start
Go to: http://localhost:3000

🔐 .env (Example for Backend)
env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
🧪 Test Credentials
bash
Copy
Edit
Email: test@example.com
Password: 123456
📸 Screenshots
Add your screenshots inside a screenshots/ folder and update paths like:

scss
Copy
Edit
![Login](screenshots/login.png)
![Pizza Builder](screenshots/pizza-builder.png)
![Admin Panel](screenshots/admin.png)
✍️ Author
Shiva
Web Development & Designing Intern at Oasis Infobyte
