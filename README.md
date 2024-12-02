# Online Examination Project

This is an online examination project built using Node.js for the backend and MongoDB Atlas for storing data. The application includes features for both students and administrators. Students can take exams, view their results, and receive feedback based on their answers. Admins can manage exams and monitor student results.

## Table of Contents
- [Tech Stack](#tech-stack)
- [Project Setup](#project-setup)
- [Features](#features)
- [Dependencies](#dependencies)
- [Project Components](#project-components)
- [Screenshots](#screenshots)
- [Contributing](#contributing)

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript (handled by the Node.js backend)
- **Backend:** Node.js with Express.js
- **Database:** MongoDB Atlas
- **Dependencies:** Express, Body-parser, MongoDB, Mongoose, Nodemon

## Project Setup

To run the project locally, follow the steps below:

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/Online-Examination-Project.git
cd Online-Examination-Project
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Setup MongoDB Atlas
(a). Create a MongoDB Atlas account and set up a new cluster.
(b). Create a database and a collection for storing your exam data.
(c). Obtain the connection string from the MongoDB Atlas dashboard and update your .env file with the connection URL.
### 4. Start the Development Server
```bash
npm start
```

### 5. Open in Browser
Go to http://localhost:3000 to view the application.
### Features
(a). Admin Panel: Admins can log in, initiate exams, and view student results.
(b). Student Panel: Students can log in, take the exam, and see their results.
(c). Objective Questions: The exam contains multiple-choice questions.
(d). Real-Time Feedback: Correct answers are shown in green, incorrect answers in red.
(d). Results Page: After completing the exam, students can view their score and feedback.

### Dependencies
  express: Web framework for Node.js
  body-parser: Middleware to parse incoming request bodies
  mongodb: MongoDB driver for Node.js
  mongoose: MongoDB object modeling for Node.js
  nodemon: A utility that monitors for changes in the source code and automatically restarts       the server
  
## Project Components
### 1. Home Page

Landing page with basic navigation options.

![image](https://github.com/user-attachments/assets/34df5efa-3ffd-4abd-914c-f4b67d937968)

### 2. About Panel

Page providing information about the project and instructions for use.

![image](https://github.com/user-attachments/assets/88d1dde4-e3d9-44c2-bbf7-b428ed19097f)

### 3. Admin Login Page

Admin login page to manage exams and view student results.

![image](https://github.com/user-attachments/assets/e82d9808-e03f-4f78-b0b0-0a6eb973148d)

### 4. Student Login Page

Student login page to access exams.

![image](https://github.com/user-attachments/assets/3bc4b52b-a0f3-4ee9-868d-315074ed09f5)

### 5. Initiate the Exam

Page where the admin can initiate the exam.

![image](https://github.com/user-attachments/assets/51c9ec5c-2cfc-4e1a-b298-cea87e6e18fd)

### 6. Objective Question Panel Page

Students can answer objective-type questions.

![image](https://github.com/user-attachments/assets/fdd28ee9-c4ae-4d51-b0e7-a4973876b54a)

### 7. Correct Answer Feedback (Green)

Visual feedback for correct answers (highlighted in green).

![image](https://github.com/user-attachments/assets/cc12098e-a329-4348-883b-8bf9fdd80f3f)

### 8. Incorrect Answer Feedback (Red)

Visual feedback for incorrect answers (highlighted in red).

![image](https://github.com/user-attachments/assets/8abef2fa-802f-48db-9355-2a924988c64c)

### 9. All Questions Completed

Notification showing when all questions have been answered.

![image](https://github.com/user-attachments/assets/4493e757-1a0f-491f-b8b4-ad56c9f82719)

### 10. Result Page

The final results page showing the student's score and correct answers.

![image](https://github.com/user-attachments/assets/eccf0b73-9069-4458-ad3a-9f8dfe599496)" 

### Contributing
We welcome contributions to the project! If you would like to help improve this project, please fork the repository and create a pull request. Here's how you can contribute:

1. Fork the repository
2. Create a new branch (git checkout -b feature/your-feature-name)
3. Make your changes
4. Commit your changes (git commit -m 'Add new feature')
5. Push to the branch (git push origin feature/your-feature-name)
6. Open a pull request
   
We will review your pull request and merge it if everything looks good.

## Conclusion

The Online Examination Project provides a seamless platform for students to take exams and view results, while offering administrators tools to manage exams. Built with Node.js and MongoDB Atlas, it offers scalability and efficiency, making it a reliable solution for educational institutions looking to conduct online assessments.

