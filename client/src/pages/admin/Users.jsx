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
import { getProfile, getUsers, userBlock } from "@/slices/UserSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { ListRestart } from "lucide-react";
import AddUsers from "@/components/AddUsers";
import Sort from "@/components/Sort";

const Users = () => {
  const dispatch = useDispatch();
  const { users, currentPage, profile, search } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(getUsers({ page: currentPage, limit: 20, name: search }));
    dispatch(getProfile());
  }, [dispatch, currentPage, search]);

  const handleReload = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Users</h1>
      </div>

      <div className=" flex items-center p-3 justify-between">
        <div className="flex items-center gap-5">
          <Sort />
          <ListRestart
            className="text-muted-foreground hover:text-foreground cursor-pointer"
            onClick={handleReload}
          />
        </div>
        <AddUsers />
      </div>

      <div className="flex flex-1  justify-center rounded-lg border border-dashed shadow-sm p-3 ">
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Id</TableHead>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="w-20">Is Active</TableHead>
              <TableHead className="">Block</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="">
            {users.length > 0 ? (
              users.map((user, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{user._id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="">
                    <Checkbox checked={user.isActive} />
                  </TableCell>
                  <TableCell className="">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="secondary"
                          className="w-15"
                          disabled={profile._id === user._id}
                          type="submit"
                        >
                          {user.isActive ? " Block " : "UnBlock"}
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>
                            Are you absolutely sure?
                          </AlertDialogTitle>
                          <AlertDialogDescription>
                            This action will{" "}
                            {user.isActive ? " Block " : "UnBlock"} This user
                            until you {!user.isActive ? " Block " : "UnBlock"}{" "}
                            them.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>Cancel</AlertDialogCancel>

                          <AlertDialogAction
                            type="submit"
                            onClick={() => dispatch(userBlock(user.email))}
                          >
                            Continue
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow className="text-center text-4xl font-light">
                <TableCell colSpan={5} rowspan={4}>
                  Users not found!
                </TableCell>
                
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            {users.length > 0 && (
              <TableRow>
                <TableCell colSpan={4}>Total</TableCell>
                <TableCell className="text-right">{users?.length}</TableCell>
              </TableRow>
            )}
          </TableFooter>
        </Table>
      </div>
    </>
  );
};

export default Users;
