import { Card } from "@/components/ui/card";
import React from "react";
import { Link } from "react-router-dom";

export const Notfound = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-1/2 h-1/2 text-center p-5">
        <h1 className="text-4xl font-bold ">404</h1>
        <h1 className="mt-5">Page not found!</h1>
        <Link to={"/"}>
          <h1 className="mt-5 underline">Home</h1>
        </Link>
      </Card>
    </div>
  );
};
