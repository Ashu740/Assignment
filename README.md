Installation
1. Clone the Repository
bash
Copy
Edit
git clone 
2. Install Dependencies
Run the following command to install all required dependencies:
npm install
This will install:

React, React Router, Redux Toolkit, React Redux

Tailwind CSS, PostCSS, and Autoprefixer

Features
Login and authentication using mock API.

View a paginated list of users.

Edit user details in a modal.

Delete users with confirmation.

Redirect users to the login page if not authenticated.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (v14 or higher)

npm or yarn

Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/your-repo/react-user-management.git
cd react-user-management
Install dependencies:

bash
Copy
Edit
npm install
Running the Project
Start the development server:

bash
Copy
Edit
npm start
Open your browser and navigate to:

arduino
Copy
Edit
http://localhost:3000
Usage
Login:
Use the login form to authenticate. Mock API will accept these credentials:

Email: eve.holt@reqres.in

Password: cityslicka

View Users:
Once logged in, you'll be redirected to the user list page.

Edit Users:
Click the Edit button on any user card to update their details.

Delete Users:
Click the Delete button on any user card to remove the user from the list

Scripts
Here are the commonly used npm scripts:

npm start: Runs the app in development mode.

npm run build: Builds the app for production.

npm test: Launches the test runner.

Folder Structure
nginx
Copy
Edit
src
├── components
│   ├── EditUserModal.jsx   # Modal for editing users
│   ├── UserCard.jsx        # User card component
│   └── UserList.jsx        # List of users
├── pages
│   ├── LoginPage.jsx       # Login page
│   └── UserListPage.jsx    # User list page
├── store
│   ├── slices
│   │   └── userSlice.js    # Redux slice for user management
│   └── store.js            # Redux store configuration
├── services
│   └── api.js              # API service helper
├── App.jsx                 # Main app component
├── index.js                # React entry point
└── index.css               # Tailwind CSS imports
API Details
This project uses the Reqres API for mock data.

Endpoints used:

POST /api/login: Authenticate user.

GET /api/users?page=<page>: Fetch users.

PUT /api/users/<id>: Update user details.

DELETE /api/users/<id>: Delete a user.

Contribution
Feel free to fork the repository and submit pull requests.
