import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { useDispatch } from "react-redux";
import { addNewUser } from "@/slices/UserSlice";
const AddUsers = () => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    roles: ["user"],
  });
  const handleCreateUser = (e) => {
    e.preventDefault();
    dispatch(addNewUser(payload));

    setPayload({
      name: "",
      email: "",
      password: "",
      roles: ["user"],
    });
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  const isFormValid = () => {
    if (payload.name !== "" && payload.email !== "" && payload.password !== "")
      return true;

    return false;
  };
  return (
    <>
      {" "}
      <Dialog>
        <DialogTrigger asChild>
          <Button>Add Users</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add user</DialogTitle>
            <DialogDescription>Add the details of new user.</DialogDescription>
          </DialogHeader>
          <form action="" onSubmit={(e) => handleCreateUser(e)}>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Pedro Duarte"
                  className="col-span-3"
                  onChange={(e) =>
                    setPayload((prev) => {
                      return {
                        ...prev,
                        name: e.target.value,
                      };
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="pedro@gmail.com"
                  className="col-span-3"
                  onChange={(e) =>
                    setPayload((prev) => {
                      return {
                        ...prev,
                        email: e.target.value,
                      };
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder=""
                  className="col-span-3"
                  onChange={(e) =>
                    setPayload((prev) => {
                      return {
                        ...prev,
                        password: e.target.value,
                      };
                    })
                  }
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Role
                </Label>
                <div>
                  <Checkbox
                    onClick={() => {
                      setIsAdmin(!isAdmin);
                      isAdmin
                        ? setPayload((prev) => {
                            return {
                              ...prev,
                              roles: ["user"],
                            };
                          })
                        : setPayload((prev) => {
                            return {
                              ...prev,
                              roles: ["admin"],
                            };
                          });
                    }}
                  />
                  <Label htmlFor="role" className="text-right">
                    {" "}
                    Admin
                  </Label>
                </div>
                <div>
                  <Checkbox checked />
                  <Label htmlFor="role" className="text-right">
                    {" "}
                    User
                  </Label>
                </div>
              </div>
            </div>

            <DialogFooter>
              <DialogClose>
                <Button variant="outline" type="button">
                  close
                </Button>
              </DialogClose>
              <Button type="submit" disabled={!isFormValid()}>
                Save User
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddUsers;
