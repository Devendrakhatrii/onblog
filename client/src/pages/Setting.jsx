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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { changePassword } from "@/services/users";
import { useState } from "react";
import toast from "react-hot-toast";

export function Setting() {
  const userData = JSON.parse(localStorage.getItem("current_user"));

  const [user, setUser] = useState({
    name: userData.name,
    email: userData.email,
  });

  const [payload, setPayload] = useState({
    email: user.email,
    role: user.role,
    oldPassword: "",
    newPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await changePassword(payload);

      if (data?.data) {
        toast.success("password changed successfully!");
      }
    } catch (error) {
      console.log(error.msg);

      setError(error.message);
      toast.error(error.message);
    } finally {
      setTimeout(() => {
        setError("");
        setPayload({
          email: "",
          oldPassword: "",
          newPassword: "",
        });
      }, 3000);
    }
  };

  const isFormValid = () => {
    if (payload.oldPassword !== "" && payload.newPassword !== "") {
      return true;
    }
    return false;
  };

  return (
    <div className="h-[85vh]  flex md:items-center md:justify-center p-5 pt-32 md:pt-10">
      <Tabs defaultValue="account" className="w-[400px] ">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  defaultValue={user.name}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input id="username" defaultValue={user.email} />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <form action="" onSubmit={(e) => handleSubmit(e)}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input
                    id="current"
                    type="password"
                    required
                    onChange={(e) =>
                      setPayload((prev) => {
                        return {
                          ...prev,
                          oldPassword: e.target.value,
                        };
                      })
                    }
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input
                    id="new"
                    type="password"
                    required
                    onChange={(e) =>
                      setPayload((prev) => {
                        return {
                          ...prev,
                          newPassword: e.target.value,
                        };
                      })
                    }
                  />
                </div>
              </CardContent>

              <CardFooter>
                <Button type="submit" disabled={!isFormValid()}>
                  Save password
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
