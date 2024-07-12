import {
  DiscordLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const About = () => {
  return (
    <div className=" md:px-10  min-h-[100vh]  w-full p-6">
      <div className=" md:h-[30vh] md:m-6  flex items-center justify-center flex-col text-center">
        <h1 className="font-bold text-4xl md:text-7xl">About Us.</h1>
        <div className=" md:px-20 md:mx-40 mt-3 font-semibold">
          <p>
            At [on Blog], we believe that everyone has a story to tell and a
            unique perspective to share. Our mission is to provide a platform
            where voices can be heard, ideas can be exchanged, and communities
            can be built.
          </p>
        </div>
      </div>
      <div className=" md:h-[50vh] md:flex sm:gap-1 md:gap-5 mt-10">
        <div className="md:w-1/2 md:h-full  flex items-center justify-center">
          <h1 className="md:font-extrabold  font-bold text-3xl md:text-4xl">
            "What are we all About?"
          </h1>
        </div>
        <div className="md:w-1/2 md:p-10 flex gap-4 mt-5 flex-col font-semibold">
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
      <div className=" md:h-[50vh] md:w-full md:mt-5  flex items-center justify-center text-center pt-16">
        <div className="h-full md:w-1/2">
          <h1 className="md:font-extrabold  font-bold text-4xl">
            Find more about us through.
          </h1>

          <div className="flex items-center justify-evenly md:mt-20 mt-10  gap-2 h-20 transition-transform">
            <InstagramLogoIcon className="h-16 w-16 md:h-20 md:w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform" />

            <LinkedInLogoIcon className="h-16 w-16 md:h-20 md:w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform" />
            <TwitterLogoIcon className="h-16 w-16 md:h-20 md:w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform" />
            <DiscordLogoIcon className="h-16 w-16 md:h-20 md:w-20 hover:h-24 hover:w-24 cursor-pointer transition-transform " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
