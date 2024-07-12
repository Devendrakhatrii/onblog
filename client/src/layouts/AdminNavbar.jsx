import { Link, NavLink, Navigate, Outlet, useNavigate } from "react-router-dom";
import {
  Bell,
  CircleUser,
  Home,
  Menu,
  Package,
  Package2,
  Search,
  Users,
} from "lucide-react";
import { LineChart, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { verifyLogin, verifyRole } from "@/utils/login";
import { useDispatch } from "react-redux";
import { search } from "@/slices/UserSlice";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";

export default function AdminNavbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!(verifyLogin() && verifyRole(["admin"]))) {
    return <Navigate replace to={"/login"} />;
  }

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    toast.success("Logging out!");
    navigate("/");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] ">
      <div className="hidden border-r bg-muted/40 md:block  ">
        <div className=" fixed w-[18%] h-full">
          <div className="flex h-full max-h-screen flex-col gap-2">
            <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="">On Blog</span>
              </Link>
              <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Toggle notifications</span>
              </Button>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <NavLink
                  to="home"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive ? "bg-muted text-primary" : null
                    }`
                  }
                >
                  <Home className="h-4 w-4" />
                  Home
                </NavLink>

                <NavLink
                  to="blogs"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2  transition-all text-muted-foreground hover:text-primary ${
                      isActive ? "bg-muted text-primary" : null
                    }`
                  }
                >
                  <Package className="h-4 w-4" />
                  Blogs{" "}
                </NavLink>
                <NavLink
                  to="users"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive ? "bg-muted text-primary" : null
                    }`
                  }
                >
                  <Users className="h-4 w-4" />
                  Users
                </NavLink>
              </nav>
            </div>
            <div className="mt-auto p-4">
              <Card x-chunk="dashboard-02-chunk-0">
                <CardHeader className="p-2 pt-0 md:p-4">
                  <CardTitle>Go to Home</CardTitle>
                  <CardDescription>
                    get back to home page for related information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                  <Link to={"/"}>
                    <Button size="sm" className="w-full">
                      Home
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-50">
          {/* <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Go to Home</CardTitle>
                    <CardDescription>
                      get back to home page for related information.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button size="sm" className="w-full">
                      <Link to={"/"}>Home</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text- font-medium">
                <NavLink
                  to="home"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive ? "bg-muted text-primary" : null
                    }`
                  }
                >
                  <Home className="h-4 w-4" />
                  Home
                </NavLink>
                <NavLink
                  to="blogs"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2  transition-all text-muted-foreground hover:text-primary ${
                      isActive ? "bg-muted text-primary" : null
                    }`
                  }
                >
                  <Package className="h-4 w-4" />
                  Blogs
                </NavLink>
                <NavLink
                  to="users"
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${
                      isActive ? "bg-muted text-primary" : null
                    }`
                  }
                >
                  <Users className="h-4 w-4" />
                  Users
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search..."
                  onChange={(e) => dispatch(search(e.target.value))}
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {/* <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>
          </div>
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no products
              </h3>
              <p className="text-sm text-muted-foreground">
                You can start selling as soon as you add a product.
              </p>
              <Button className="mt-4">Add Product</Button>
            </div>
          </div> */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
