import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, MapPin, Phone } from "lucide-react";
const Contact = () => {
  return (
    <div className=" px-10  min-h-[100vh]  w-full">
      <div className=" h-[30vh] flex items-center justify-center flex-col text-center">
        <h1 className="font-bold text-7xl">Contact Us.</h1>
        <div className=" px-20 mx-40 mt-5">
          <p>
            We are constantly evolving and looking for ways to improve. Your
            feedback is invaluable to us, and we welcome any suggestions you may
            have. Thank you for being a part of our community and for sharing
            your journey with us.
          </p>
        </div>
      </div>
      <div className=" h-[50vh] flex gap-5">
        <div className="w-1/2 h-full  flex items-center justify-center">
          <h1 className="font-extrabold text-4xl">
            "Fell free to share your opinion?"
          </h1>
        </div>
        <div className="w-1/2 p-10 px-40   flex gap-4 flex-col font-semibold">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" required />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required />
          </div>
          <div className="grid  gap-2">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" />
          </div>
          <div className="flex  justify-end ">
            <Button type="submit" variant={"outline"}>
              Send
            </Button>
          </div>
        </div>
      </div>
      <div className=" h-[50vh] w-full flex items-center justify-center text-center pt-16">
        <div className="h-full w-1/2">
          <h1 className="font-extrabold text-4xl">Info.</h1>

          <div className="flex  items-center justify-center p-5 m-10 gap-10 ">
            <div className="  flex flex-col items-center justify-center">
              <MailIcon className="h-20 w-20" />
              <h1>support@onblog.com</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <MapPin className="h-20 w-20" />
              <h1>Kathmandu, Nepal</h1>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <Phone className="h-20 w-20" />
              <h1>+977 9762961214</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
