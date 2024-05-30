import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Toast from "@/components/Alert";
import { generateFPT } from "@/services/users";

export default function ForgetPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await generateFPT({ email });
      if (data) {
        setMessage(data.data);
        setTimeout(() => {
          navigate("/verify-password", { state: { email } });
        }, 2000);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setTimeout(() => {
        setError("");
        setMessage("");
      }, 3000);
    }
  };
  return (
    <div className="bg-zinc-100 h-screen flex items-center justify-center">
      <Card className="w-[350px]">
        {error && <Toast msg={error} />}
        {message && <Toast msg={message} />}
        <CardHeader>
          <CardTitle>Forget Password ?</CardTitle>
          <CardDescription>
            Enter your email associated with your account.
          </CardDescription>
        </CardHeader>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link to={"/login"}>
              <Button variant="outline">Cancel</Button>
            </Link>

            <Button type="submit">Send OTP</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
