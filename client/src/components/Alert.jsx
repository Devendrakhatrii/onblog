import { Alert } from "react-bootstrap";

const Toast = ({ variant = "danger", msg }) => {
  return (
    <Alert key={variant} variant={variant}>
      {msg}
    </Alert>
  );
};

export default Toast;
