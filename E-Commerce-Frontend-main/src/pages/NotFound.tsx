import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFound() {
  return (
    <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-9xl font-extrabold tracking-widest text-primary/10">404</h1>
      <div className="bg-primary text-primary-foreground px-2 text-sm rounded rotate-12 absolute">
        Page Not Found
      </div>
      <h2 className="text-3xl font-bold mt-8 mb-4">Oops! That page doesn't exist.</h2>
      <p className="text-muted-foreground mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link to="/">
        <Button size="lg">Go back home</Button>
      </Link>
    </div>
  );
}
