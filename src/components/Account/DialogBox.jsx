import Button from "../Buttons/Button";
import { Link } from "react-router-dom";

const DialogBox = ({ heading, buttonText, userStatus, action, actionLink, children }) => {
  return (
      <div className="dialog-box">
        <p className="heading">{heading}</p>

        {children}

        <Button>
          <Link to="/freshfruits/checkout/successful">{buttonText}</Link>
        </Button>

        <p className="page-navigation">
          {userStatus}
          <Link to={actionLink}>{action}</Link>
        </p>
      </div>
  );
};

export default DialogBox;
