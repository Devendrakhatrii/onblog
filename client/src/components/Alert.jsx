import { Alert } from "react-bootstrap";

const Toast = ({ variant = "danger", msg }) => {
  return (
    <Alert key={variant} variant={variant}>
      {msg}
    </Alert>
  );
};

export default Toast;

// import { Button } from "@/components/ui/button";
// import { useToast } from "@/components/ui/use-toast";

// export default function Toast({ variant = "destructive", msg }) {
//   const { toast } = useToast();

//   return (
//     <Button
//       variant="outline"
//       onClick={() => {
//         toast({
//           description: "Your message has been sent.",
//         });
//       }}
//     >
//       Show Toast
//     </Button>
//   );
// }
