import { useDispatch, useSelector } from "react-redux";
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
import { useEffect } from "react";
import { getProfile } from "@/slices/UserSlice";
import { dateFormatter } from "@/utils/date";
import { getToken } from "@/utils/token";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { profile } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);
  const token = getToken();
  const navigate = useNavigate();
  if (!token) {
    navigate("/login");
  }

  return (
    <>
      <div className="flex flex-1 md:items-center md:justify-center  rounded-lg border border-dashed shadow-sm p-5">
        <Card className="md:w-1/2 w-full  h-min">
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
                  <Label htmlFor="email">Name</Label>
                  <Input id="email" value={`${profile.email}`} disabled />
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
            <Button>Edit</Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Profile;
