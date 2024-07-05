import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { addNewUser, getUsers } from "@/slices/UserSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";

const Users = () => {
  const dispatch = useDispatch();
  const [isAdmin, setIsAdmin] = useState(false);
  const { users, currentPage, limit, loading, total, user } = useSelector(
    (state) => state.users
  );

  const [payload, setPayload] = useState({
    name: "",
    email: "",
    password: "",
    roles: ["user"],
  });

  // useEffect(() => {
  //   dispatch(getUsers({ page: currentPage, limit, name: "" }));
  // }, [dispatch, currentPage, limit, user]);

  const handleCreateUser = (e) => {
    e.preventDefault();
    try {
      dispatch(addNewUser(payload));
      toast.success("User created succesfully!");
    } catch (error) {
      toast.error(error);
    } finally {
      setPayload({
        name: "",
        email: "",
        password: "",
        roles: ["user"],
      });
    }
  };

  const isFormValid = () => {
    if (payload.name !== "" && payload.email !== "" && payload.password !== "")
      return true;

    return false;
  };
  return (
    <>
      {" "}
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Users</h1>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <div className=" flex justify-end">
            <Button className="mt-4">Add Users</Button>
          </div>
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
                  <Checkbox />
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
      <div className="flex flex-1  justify-center rounded-lg border border-dashed shadow-sm p-3 ">
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-20">Is Active</TableHead>
              <TableHead className="">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{user._id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell className="">
                  <Checkbox checked={user.isActive} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Total</TableCell>
              <TableCell className="text-right">{users.length}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default Users;
