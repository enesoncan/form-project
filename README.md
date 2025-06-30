# 📘 Project Documentation

## 1. About the Project

This project aims to implement a reusable and dynamic form structure.

On the initial page of the project, input fields for Full Name, Email, Password, and Remember Me are created using the dynamic Form component and other supporting components. The entered data is captured upon submission.

For form management and validation, the react-hook-form library is utilized. The Email and Password fields are required, and validation errors are displayed if the form is submitted without filling them in.

Additionally, a regular expression is used to validate the Email field for a proper email format, and another regex is applied to the Password field to ensure it meets alphanumeric criteria. Otherwise, validation errors are displayed as well.

After the form is correctly filled out and submitted, the user is redirected to the /result page using React Router. During this navigation, the entered data is passed to the /result page via state.

On the /result page, the user's submitted information — Full Name, if provided and Email — is displayed.

If the user attempts to access the /result page directly via the URL without submitting the form, a message is shown indicating that no user information is available and they should return to the home page. Additionally, a button is provided to navigate the user back to the home page.

Thank you very much for taking your time. 

---

## 2. Technologies Used

- **Vite** – Build tool
- **TypeScript** – Type safety
- **React Hook Form** - Form Management
- **Tailwind CSS** - CSS Framework

---

## 3. Project Structure

```bash
src/
├── App.tsx
├── main.tsx 
├── components/
│   ├── Button/
│   │   └── Button.tsx    
│   └── Form/
│   │   └── Form.tsx 
│   ├── FormItem/
│   │   └── FormItem.tsx    
│   └── Input/
│   │   └── Input.tsx   
├── pages/
│   ├── CreateUser.tsx
│   └── UserResult.tsx
```

## 4. Installation and Running the App

```bash
git clone https://github.com/enesoncan/form-project.git
cd form-project
npm install
npm run dev
```
App will run at http://localhost:5173