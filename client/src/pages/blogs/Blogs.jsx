import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Bookmark, CircleMinus, Ellipsis } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useBlogContext } from "@/context/BlogContext";

const Blogs = () => {
  const { blogs, loading, error, setTitle } = useBlogContext();
  const userName = "Luish Dahal";
  const publishedDate = "May 19, 2024";
  console.log(blogs);

  return (
    <div className="bg-red-50 min-h-screen p-3 flex flex-wrap items-center justify-center">
      {blogs &&
        blogs.data.map((item, index) => {
          return (
            <Card className="w-1/2 mb-4 m-2" key={index}>
              <CardHeader>
                <CardTitle className="flex  items-center gap-2">
                  <Avatar className="z-0">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>{item.author}</span>
                  <span className="">:</span>
                  <span className="text-muted-foreground">{publishedDate}</span>
                </CardTitle>
                <CardDescription className="font-bold text-lg text-foreground">
                  {item.title}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <p className="">{item.content.slice(0, 500).concat("...")}</p>
                <img className="h-50 w-1/3 rounded-md" src={item.pictureUrl} />
              </CardContent>
              <CardFooter className="flex items-center  justify-between">
                <div className="flex items-center gap-2 ">
                  <Badge
                    variant="outline"
                    className="rounded-full py-1 px-2  cursor-pointer bg-slate-100"
                  >
                    Food
                  </Badge>
                  <p className="font-light text-sm">
                    {item.duration} min read .
                  </p>
                  <p className="font-light text-sm">Selected for you</p>
                </div>
                <div className="flex items-center px-4  gap-3 w-1/2  text-muted-foreground cursor-pointer">
                  <Bookmark className="hover:text-foreground h-5" />
                  <CircleMinus className="hover:text-foreground h-5" />
                  <Ellipsis className="hover:text-foreground h-5" />
                </div>
              </CardFooter>
            </Card>
          );
        })}
    </div>
  );
};

export default Blogs;
