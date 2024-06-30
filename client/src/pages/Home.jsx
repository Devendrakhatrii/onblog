import { Link, Navigate, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowUpRight,
  CreditCard,
  DollarSign,
  Users,
  Bookmark,
  CircleMinus,
  Ellipsis,
  BookA,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { getToken } from "@/utils/token";
import { useBlogContext } from "@/context/BlogContext";
import { dateFormatter } from "@/utils/date";
import { verifyLogin } from "@/utils/login";
import { jwtDecode } from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();
  const userName = "Luish Dahal";
  const publishedDate = "May 19, 2024";
  const { blogs, loading, error } = useBlogContext();

  useEffect(() => {
    const token = getToken();
    try {
      jwtDecode(token);
    } catch (error) {
      localStorage.removeItem("access_token");
    }
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card x-chunk="dashboard-01-chunk-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Featured</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex  items-center justify-start gap-2">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="z=0"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div className="font-bold text-sm">
                  <span>Snigdha Adhikari</span>
                </div>
              </div>
              <div className="text-lg font-bold">
                Why Japanese Websites Look So Different
              </div>
              <div className="flex gap-3">
                <p className="text-xs text-muted-foreground">2 june 2024</p>
                <p className="text-xs text-muted-foreground">2 min read</p>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blogs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+50</div>
              <p className="text-xs text-muted-foreground">
                +5% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Authors</CardTitle>
              <BookA className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+100</div>
              <p className="text-xs text-muted-foreground">
                +1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+5</div>
              <p className="text-xs text-muted-foreground">
                +2 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link to="/blogs">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>

            <CardContent className="flex gap-4 flex-col">
              {blogs &&
                blogs.data.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      x-chunk="dashboard-01-chunk-3"
                      className="p-0 "
                    >
                      <Link to={`/blogs/${item?.slug}`}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                          <CardTitle className="text-sm font-medium flex  justify-between items-center gap-2">
                            <Avatar className="">
                              <AvatarImage
                                src="https://github.com/shadcn.png"
                                className="z=0"
                              />
                              <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className="flex gap-2">
                              <span>{item.author}</span>
                              <span className="">:</span>
                              <span className="text-muted-foreground">
                                {dateFormatter(item.createdAt, "MMMM Do YYYY")}
                              </span>
                            </div>
                          </CardTitle>
                          <Activity className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <div className="flex">
                          <CardContent className="">
                            <div className="text-2xl font-bold">
                              {item.title}
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {item.content.slice(0, 900).concat("....")}
                            </p>
                          </CardContent>
                          <div className=" m-5 object-fill h-100 w-50">
                            <img
                              className=" h-full w-full rounded-lg"
                              src={item.pictureUrl}
                            />
                          </div>
                        </div>
                      </Link>
                    </Card>
                  );
                })}
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5" className="h-min">
            <CardHeader>
              <CardTitle>Recomended</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-8">
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Olivia Martin
                  </p>
                  <p className="text-sm text-muted-foreground">
                    olivia.martin@email.com
                  </p>
                </div>
                <Button className="ml-auto font-medium">Follow</Button>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/02.png" alt="Avatar" />
                  <AvatarFallback>JL</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Jackson Lee
                  </p>
                  <p className="text-sm text-muted-foreground">
                    jackson.lee@email.com
                  </p>
                </div>
                <Button className="ml-auto font-medium">Follow</Button>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/03.png" alt="Avatar" />
                  <AvatarFallback>IN</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Isabella Nguyen
                  </p>
                  <p className="text-sm text-muted-foreground">
                    isabella.nguyen@email.com
                  </p>
                </div>
                <Button className="ml-auto font-medium">Follow</Button>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/04.png" alt="Avatar" />
                  <AvatarFallback>WK</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    William Kim
                  </p>
                  <p className="text-sm text-muted-foreground">
                    will@email.com
                  </p>
                </div>
                <Button className="ml-auto font-medium">Follow</Button>
              </div>
              <div className="flex items-center gap-4">
                <Avatar className="hidden h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/05.png" alt="Avatar" />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <p className="text-sm font-medium leading-none">
                    Sofia Davis
                  </p>
                  <p className="text-sm text-muted-foreground">
                    sofia.davis@email.com
                  </p>
                </div>
                <Button className="ml-auto font-medium">Follow</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Home;
