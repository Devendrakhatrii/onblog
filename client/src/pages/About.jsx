import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const About = () => {
  return (
    <div className=" px-10  min-h-[100vh]  w-full">
      <div className=" h-[30vh] flex items-center justify-center flex-col text-center">
        <h1 className="font-bold text-7xl">About Us.</h1>
        <div className=" px-20 mx-40 mt-5">
          <p>
            At [on Blog], we believe that everyone has a story to tell and a
            unique perspective to share. Our mission is to provide a platform
            where voices can be heard, ideas can be exchanged, and communities
            can be built.
          </p>
        </div>
      </div>
      <div className=" h-[50vh] flex gap-5">
        <div className="w-1/2 h-full  flex items-center justify-center">
          <h1 className="font-extrabold text-4xl">"What are we all About?"</h1>
        </div>
        <div className="w-1/2 p-10  flex gap-4 flex-col font-semibold">
          <p>
            Our mission is to empower individuals to share their stories and
            connect with others. We aim to create a welcoming and inclusive
            space where diversity is celebrated, and meaningful conversations
            can flourish.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            necessitatibus reiciendis officiis quo ex tempore mollitia animi
            reprehenderit. Vero ullam, assumenda fugit possimus labore iste
            obcaecati reiciendis hic recusandae facilis, nemo unde neque
            pariatur esse autem commodi itaque repellendus. Odio, asperiores.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            fugiat tempora adipisci dolores temporibus animi eligendi impedit
            ducimus quam illum.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            fugiat tempora adipisci dolores temporibus animi eligendi impedit
            ducimus quam illum.
          </p>
        </div>
      </div>
      <div className=" h-[50vh] w-full flex items-center justify-center text-center pt-16">
        <div className="h-full w-1/2">
          <h1 className="font-extrabold text-4xl">
            Find more about us through.
          </h1>

          <div className="flex items-center justify-evenly mt-20  gap-2 h-20 transition-transform">
            <InstagramLogoIcon className="h-20 w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform" />

            <LinkedInLogoIcon className="h-20 w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform" />
            <TwitterLogoIcon className="h-20 w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform" />
            <DiscordLogoIcon className="h-20 w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
