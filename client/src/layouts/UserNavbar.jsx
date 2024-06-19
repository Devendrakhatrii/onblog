import { NavLink, useNavigate } from "react-router-dom";
import { Bookmark, CircleUser, Menu, Package2, Search } from "lucide-react";

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
import { useSelector } from "react-redux";

export default function UserNavbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const { setTitle } = useBlogContext();
  const { delaySearch } = UseDebounce(query);
  const { quantity } = useSelector((state) => state.bookmarks);
  console.log(quantity);

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
          className={({ isActive }) =>
            `  transition-colors hover:text-foreground ${
              isActive ? "text-foreground" : "text-muted-foreground"
            } `
          }
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            ` transition-colors hover:text-foreground ${
              isActive ? "text-foreground" : "text-muted-foreground"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            `  transition-colors hover:text-foreground ${
              isActive ? "text-foreground" : "text-muted-foreground"
            } `
          }
        >
          Contact
        </NavLink>
        <NavLink
          to="blogs"
          className={({ isActive }) =>
            `  transition-colors hover:text-foreground ${
              isActive ? "text-foreground" : "text-muted-foreground"
            } `
          }
        >
          Blogs
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
              to="/ "
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Package2 className="h-6 w-6" />
              <span className="sr-only">Acme Inc</span>
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                `  transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                } `
              }
            >
              Home
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) =>
                ` transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                `  transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                } `
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="blogs"
              className={({ isActive }) =>
                `  transition-colors hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                } `
              }
            >
              Blogs
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
            <span className=" absolute right-0 -top-1 font-bold text-sm ">
              {quantity > 0 ? quantity : null}
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
