import { Button } from "@/components/ui/button";
import { getToken } from "@/utils/token";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getToken();
    if (token) {
      navigate("/users/home");
    }
  });
  return (
    <div className=" h-screen w-full">
      <div className=" h-[10vh] flex w-full items-center justify-between md:px-20 px-6">
        <h1 className="font-extrabold md:text-4xl text-3xl cursor-pointer">
          On Blog.
        </h1>
        <div className=" md:p-5 md:w-1/4 flex justify-evenly md:gap-5 gap-2">
          <Link to={"/login"}>
            <Button
              variant={"outline"}
              className="md:h-10 md:px-8 rounded-full"
            >
              Login
            </Button>
          </Link>
          <Link to={"/register"}>
            <Button variant="outline" className="md:h-10  md:px-8 rounded-full">
              Register
            </Button>
          </Link>
        </div>
      </div>

      <div className="h-[90vh]  flex items-start justify-start md:px-20 px-6 pt-40 flex-col gap-6">
        <h1 className="font-extrabold text-7xl">
          "Blog Freely, <br />
          Connect Deeply"
        </h1>
        <h1 className="font-semibold text-4xl">
          Your Stories, Your Voice, Your Platform
        </h1>
        <Link to={"/users/home"}>
          <Button className="h-12 rounded-full p-10 py-8 text-2xl mt-5">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
