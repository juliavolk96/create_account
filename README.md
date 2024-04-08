# Test Assignment "Account Creation Form"

## Description

The project is a simple HTML page with a form for creating an account. When the user clicks the "Create account" button, the form performs data validation:
* all fields must be filled,
* the email address must match the format name@example.com,
* the entered passwords match,
* also, for increased security, I added a password complexity check.

If the input is invalid, an error message is displayed. If it is valid, a success message is displayed. I used a ready-made Material UI component to display error and success messages, which saved time on development and styling.

Adaptive styles were applied using media queries to ensure ease of use on mobile devices.

## Backend

The backend can be found at the link https://github.com/juliavolk96/backend_create_account.

## Installation

Before starting the project, make sure you have Node.js and npm installed. You can check their versions with the following commands:

```bash
$ node -v
$ npm -v
```

If you don’t have them, you can install them from the official Node.js website.

Then clone the repository and install the dependencies:

1. Clone the repository to your local computer using the command `git clone git@github.com:juliavolk96/create_account.git`.
2. Navigate to the project folder using the command `cd <project name>`.
3. Install all necessary dependencies using the command `npm install`.

## Project Launch

To launch the project, use the following command:

```bash
npm start
```

After that, the project will be available at http://localhost:3000.

## The Project is also available at the link
The project can be accessed on GitHub Pages at the following link:

https://juliavolk96.github.io/create_account/