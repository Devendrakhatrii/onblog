import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../services/users";
import Toast from "../components/Alert";
import { getToken, setToken } from "../utils/token";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

export default function Login() {
  const navigate = useNavigate();
  const [payload, setPayload] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(payload);
      if (data?.data) {
        setToken(data.data);
        toast.success("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 3000);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/");
    }
  });

  return (
    <div className="bg-zinc-100 h-screen flex items-center">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, email: e.target.value };
                  })
                }
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  to="/forget-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, password: e.target.value };
                  })
                }
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              onClick={(e) => handleLogin(e)}
            >
              {" "}
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="underline">
              Register
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
