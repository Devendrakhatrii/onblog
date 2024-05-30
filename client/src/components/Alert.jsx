import { Alert } from "react-bootstrap";

const Toast = ({ variant = "danger", msg }) => {
  return (
    <Alert key={variant} variant={variant}>
      {msg}
    </Alert>
  );
};

export default Toast;

// import { useToast } from "@/components/ui/use-toast";

// export default function Toast({ variant = "destructive", msg }) {
//   const { toast } = useToast();

//   return (
//      {
//         toast({
//           description: {msg},
//         });
//       }}

//   );
// }
