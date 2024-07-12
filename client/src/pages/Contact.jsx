import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MailIcon, MapPin, Phone } from "lucide-react";
const Contact = () => {
  return (
    <div className=" md:px-10  min-h-[100vh]  p-6">
      <div className=" md:h-[30vh] flex items-center justify-center flex-col text-center">
        <h1 className="font-bold md:text-7xl text-4xl">Contact Us.</h1>
        <div className=" md:px-20 md:mx-40 mt-5">
          <p>
            We are constantly evolving and looking for ways to improve. Your
            feedback is invaluable to us, and we welcome any suggestions you may
            have. Thank you for being a part of our community and for sharing
            your journey with us.
          </p>
        </div>
      </div>
      <div className=" md:h-[50vh] flex gap-5 flex-col md:flex-row">
        <div className="md:w-1/2 md:h-full  flex items-center justify-center">
          <h1 className="md:font-extrabold md:text-4xl font-bold text-2xl mt-10  ">
            "Fell free to share your opinion?"
          </h1>
        </div>
        <div className="md:w-1/2  p-10  md:px-40   flex gap-4 flex-col font-semibold">
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
      <div className=" md:h-[50vh] w-full flex items-center justify-center text-center md:pt-16">
        <div className="md:h-full md:w-1/2">
          <h1 className="font-extrabold text-4xl">Info.</h1>

          <div className="flex md:flex-row flex-col items-center justify-center p-5 m-10 gap-10 ">
            <div className="  flex flex-col items-center justify-center">
              <MailIcon className="md:h-20 md:w-20 h-14 w-14" />
              <h1>support@onblog.com</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
              <MapPin className="md:h-20 md:w-20 h-14 w-14" />
              <h1>Kathmandu, Nepal</h1>
            </div>
            <div className=" flex flex-col items-center justify-center">
              <Phone className="md:h-20 md:w-20 h-14 w-14" />
              <h1>+977 9762961214</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
