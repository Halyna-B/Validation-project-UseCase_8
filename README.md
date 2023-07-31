# User Form with React, Redux and Validation

## Description

This application is a simple yet robust implementation of a user form using **React, Redux, and Validator**. The application allows users to input their **First Name, Last Name, Email, and a Message**. Upon submission, the user inputs are validated to ensure they are not empty and that the email format is correct. Once validated, the data is stored in a **Redux store**.

The application also includes a feature to **display the stored user data in a table format**. This list component fetches the stored data from the Redux store and presents it neatly in a table. Styling for the form and table are included to improve the visual appeal of the application. All these functionalities are thoroughly tested using **Jest**, a testing framework for JavaScript.

## Installation and Running Locally

You will need Node.js and npm installed on your local machine to run this application locally.

**Step 1: Clone the Repository**

Firstly, you need to clone the repository to your local machine. You can do this by running the following command:

```bash
git clone <repository-url>
Replace <repository-url> with the URL of this GitHub repository.
```
**Step 2: Install Dependencies**

Navigate into the cloned repository and install the necessary dependencies using npm:
```bash
cd <repository-folder-name>
npm install
```
Replace *<repository-folder-name>* with the name of the folder where the repository was cloned.

**Step 3: Start the Application**

Finally, you can start the application by running:
```bash
npm start
```

After running this command, you should be able to access the application at http://localhost:3000.

