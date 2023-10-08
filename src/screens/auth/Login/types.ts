// Define a type for the available stack routes
export type StackRoutes = {
  Login: undefined; // "Login" screen with no additional parameters
  SignUp: undefined; // "SignUp" screen with no additional parameters
  Welcome: undefined; // "Welcome" screen with no additional parameters
  Home: undefined; // "Home" screen with no additional parameters
  // You can include other screens and their parameters here as needed
};

// Define a type for the form data
export type FormDataProps = {
  email: string; // User's email
  password: string; // User's password
};
