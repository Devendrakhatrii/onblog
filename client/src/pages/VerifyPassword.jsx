import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyFPT } from "@/services/users";

import toast from "react-hot-toast";

const VerifyPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [message, setMessage] = useState("");

  const [payload, setPayload] = useState({
    email: location?.state?.email,
    token: "",
    newPassword: "",
  });

  useEffect(() => {
    const { state } = location;
    if (!state) {
      navigate("/forget-password");
    }
  }, [location, navigate]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const { data } = await verifyFPT(payload);
      setMessage(data?.data);
      toast.success(data?.data);
      if (data) {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
    } catch (error) {
      setError(error?.response?.data?.msg);
      toast.error(error?.response?.data?.msg || "something went wrong");
    } finally {
      setTimeout(() => {
        setMessage("");
        setError("");
        setPayload({
          email: location?.state?.email,
          token: "",
          newPassword: "",
        });
      }, 3000);
    }
  };

  return (
    <div className="bg-zinc-100 h-screen flex justify-center items-center">
      <Card>
        {/* {error && <Toast msg={error} />}
        {message && <Toast msg={message} />} */}
        <CardHeader>
          <CardTitle>Verify OPT</CardTitle>
          <CardDescription>
            Enter your otp and setup a new password.
          </CardDescription>
        </CardHeader>
        <form onSubmit={(e) => handleSubmit(e)}>
          <CardContent className="space-y-2">
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  value={location?.state?.email}
                  required
                  disabled
                />
              </div>
            </div>
            {/* <div className="space-y-1">
              <Label htmlFor="current">Enter OTP</Label>
              <Input
                id="current"
                type="text"
                maxLength={6}
                required
                onChange={(e) => {
                  setPayload((prev) => {
                    return { ...prev, token: e.target.value };
                  });
                }}
              />
            </div> */}
            <div className="space-y-3">
              <Label htmlFor="otp">Enter OTP</Label>
              <InputOTP
                id="otp"
                maxLength={6}
                value={value}
                // onChange={(value) => setValue(value)}
                onChange={(value) => {
                  setValue(value);
                  setPayload((prev) => {
                    return { ...prev, token: value };
                  });
                }}
              >
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
              <div className="text-center text-sm">
                {value === "" ? (
                  <>Enter your one-time password.</>
                ) : (
                  <>You entered: {value}</>
                )}
              </div>
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input
                id="new"
                type="text"
                required
                onChange={(e) =>
                  setPayload((prev) => {
                    return { ...prev, newPassword: e.target.value };
                  })
                }
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Save password</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default VerifyPassword;
