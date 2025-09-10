import DialogBox from "./DialogBox";
import Form from "./Form";

const SignUpPage = () => {
  return (
    <DialogBox
      heading="Create a new account"
      buttonText="Create Account"
      userStatus="Existing User? "
      action="Login"
      actionLink="/freshfruits/account/login"
    >
      <div className="names">
        <Form
          labelText="First Name"
          placeholderText="Enter your first name"
          type="text"
        />
        <Form
          labelText="Last Name"
          placeholderText="Enter your last name"
          type="text"
        />
      </div>
      <Form labelText="Email" placeholderText="Input your email" type="email" />
      <Form
        labelText="Phone Number"
        placeholderText="Input phone number"
        type="tel"
      />
      <Form
          labelText="Delivery Address"
          placeholderText="Enter the address to which items should be delivered"
          type="text"
        />
      <Form
        labelText="Password"
        placeholderText="Input your password"
        type="password"
      />
    </DialogBox>
  );
};

export default SignUpPage;
