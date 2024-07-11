import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect } from "react";
import { getProfile } from "@/slices/UserSlice";
import { dateFormatter } from "@/utils/date";

const AdminHome = () => {
  const { profile } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Home</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-5">
        <Card className="w-1/2 h-min">
          {/* {JSON.stringify(profile)} */}
          <CardHeader>
            <CardTitle>Profile</CardTitle>
            <CardDescription>Description about your profile</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="id">ID</Label>
                  <Input id="id" value={`${profile._id}`} disabled />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" value={`${profile.name}`} disabled />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="roles">Roles</Label>
                  <Input id="roles" value={`${profile.roles}`} disabled />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="createdAt">Created At</Label>
                  <Input
                    id="roles"
                    value={`${dateFormatter(profile.createdAt, "LLL")}`}
                    disabled
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            {/* <Button variant="outline">Cancel</Button> */}
            <Button>Edit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default AdminHome;
