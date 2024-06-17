import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  Activity,
  ArrowUpRight,
  Bookmark,
  CircleUser,
  CreditCard,
  DollarSign,
  Menu,
  Package2,
  Search,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

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
import UseDebounce from "@/hooks/UseDebounce";
import { useBlogContext } from "@/context/BlogContext";
import { useEffect, useState } from "react";
import { removeToken } from "@/utils/token";
import toast from "react-hot-toast";
import { Badge } from "@/components/ui/badge";

export default function UserNavbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { setTitle } = useBlogContext();
  const { delaySearch } = UseDebounce(query);

  useEffect(() => {
    setTitle(delaySearch);
  }, [query, delaySearch, setTitle]);

  const handleLogout = () => {
    removeToken();
    toast.success("Logging out!");
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-100">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <NavLink
          to="#"
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Package2 className="h-6 w-6" />
          <span className="sr-only">on blog</span>
        </NavLink>
        <NavLink
          to="/"
          className="text-foreground transition-colors hover:text-foreground"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Contact
        </NavLink>
        <NavLink
          to="blogs"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Blog
        </NavLink>
        <NavLink
          to="#"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Analytics
        </NavLink>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <NavLink
              to="#"
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </NavLink>
            <NavLink to="#" className="hover:text-foreground">
              Dashboard
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Orders
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Customers
            </NavLink>
            <NavLink
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Analytics
            </NavLink>
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
        <NavLink to="/bookmarks" className={" relative"}>
          <Button variant="outline" className="p-2">
            <Bookmark className="cursor-pointer" />
            <span className=" absolute -right-1 -top-2  font-bold text-lg">
              +
            </span>
          </Button>
        </NavLink>
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

            <DropdownMenuItem>
              <button onClick={handleLogout}>Logout</button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
