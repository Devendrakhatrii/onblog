import { Link, useNavigate } from "react-router-dom";
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
import { useEffect } from "react";
import { getToken } from "@/utils/token";

const Home = () => {
  const navigate = useNavigate();
  const userName = "Luish Dahal";
  const publishedDate = "May 19, 2024";

  useEffect(() => {
    const token = getToken();
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
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-1">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-01-chunk-3">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
            <CardHeader className="flex flex-row items-center">
              {/* <div className="grid gap-2">
                <CardTitle>Transactions</CardTitle>
                <CardDescription>
                  Recent transactions from your store.
                </CardDescription>
              </div> */}
              <Button asChild size="sm" className="ml-auto gap-1">
                <Link href="#">
                  View All
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <Card className="w-full mb-4">
              <CardHeader>
                <CardTitle className="flex  items-center gap-2">
                  <Avatar className="z-0">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>{userName}</span>
                  <span className="">:</span>
                  <span className="text-muted-foreground">{publishedDate}</span>
                </CardTitle>
                <CardDescription className="font-bold text-lg text-foreground">
                  Why Japanese Websites Look So Different
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <p className="">
                  Over the years, I have had many encounters with Japanese
                  websites — be it researching visa requirements, planning
                  trips, or simply ordering something online. And it took me a
                  loooong while to get used to the walls of text, lavish use of
                  bright colors & 10+ different fonts that sites like this one
                  throw in...
                </p>
                <img
                  src="https://miro.medium.com/v2/resize:fill:140:140/1*D-TiKrBADjkMrnHjBAQ4bQ.png"
                  alt=""
                />
              </CardContent>
              <CardFooter className="flex items-center  justify-between">
                <div className="flex items-center gap-2 ">
                  <Badge
                    variant="outline"
                    className="rounded-full py-1 px-2  cursor-pointer bg-slate-100"
                  >
                    Web Design
                  </Badge>
                  <p className="font-light text-sm">1 min read .</p>
                  <p className="font-light text-sm">Selected for you</p>
                </div>
                <div className="flex items-center px-4  gap-3 w-1/2  text-muted-foreground cursor-pointer">
                  <Bookmark className="hover:text-foreground h-5" />
                  <CircleMinus className="hover:text-foreground h-5" />
                  <Ellipsis className="hover:text-foreground h-5" />
                </div>
              </CardFooter>
            </Card>
            <Card className="w-full mb-4">
              <CardHeader>
                <CardTitle className="flex  items-center gap-2">
                  <Avatar className="z-0">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span>{userName}</span>
                  <span className="">:</span>
                  <span className="text-muted-foreground">{publishedDate}</span>
                </CardTitle>
                <CardDescription className="font-bold text-lg text-foreground">
                  Why Japanese Websites Look So Different
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-2">
                <p className="">
                  Over the years, I have had many encounters with Japanese
                  websites — be it researching visa requirements, planning
                  trips, or simply ordering something online. And it took me a
                  loooong while to get used to the walls of text, lavish use of
                  bright colors & 10+ different fonts that sites like this one
                  throw in...
                </p>
                <img
                  src="https://miro.medium.com/v2/resize:fill:140:140/1*D-TiKrBADjkMrnHjBAQ4bQ.png"
                  alt=""
                />
              </CardContent>
              <CardFooter className="flex items-center  justify-between">
                <div className="flex items-center gap-2 ">
                  <Badge
                    variant="outline"
                    className="rounded-full py-1 px-2  cursor-pointer bg-slate-100"
                  >
                    Web Design
                  </Badge>
                  <p className="font-light text-sm">1 min read .</p>
                  <p className="font-light text-sm">Selected for you</p>
                </div>
                <div className="flex items-center px-4  gap-3 w-1/2  text-muted-foreground cursor-pointer">
                  <Bookmark className="hover:text-foreground h-5" />
                  <CircleMinus className="hover:text-foreground h-5" />
                  <Ellipsis className="hover:text-foreground h-5" />
                </div>
              </CardFooter>
            </Card>
          </Card>
          <Card x-chunk="dashboard-01-chunk-5">
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
