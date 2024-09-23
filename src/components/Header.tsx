import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Logo from "../assets/Logo.svg";
import { Home, SquarePlus } from "lucide-react";

function Header() {
  return (
    <header className="bg-background backdrop:blur sticky top-0 p-2 w-full">
      <nav className="flex justify-between space-x-2 items-center">
        <div className="w-full flex justify-between">
          <Avatar>
            <AvatarImage src={Logo} />
            <AvatarFallback>L</AvatarFallback>
          </Avatar>
          <div className="flex my-auto space-x-2">
            <NavLink to="/">
              {({ isActive }) => (
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="font-semibold"
                >
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
              )}
            </NavLink>
            <NavLink to="/create-service">
              {({ isActive }) => (
                <Button
                  variant={isActive ? "default" : "ghost"}
                  className="font-semibold"
                >
                  <SquarePlus className="mr-2 h-4 w-4" />
                  Create Service
                </Button>
              )}
            </NavLink>
          </div>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
}

export default Header;
