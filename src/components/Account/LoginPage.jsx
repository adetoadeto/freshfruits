import DialogBox from "./DialogBox";
import Form from "./Form";

const LoginPage = () => {
  return (
    <DialogBox
      heading="Login to account"
      buttonText="Login"
      userStatus="New User? "
      action="Create an account"
      actionLink="/account"
    >
      <Form labelText="Email" placeholderText="Input your email" type="email" />
      <Form
        labelText="Password"
        placeholderText="Input your password"
        type="password"
      />
    </DialogBox>
  );
};

export default LoginPage;
