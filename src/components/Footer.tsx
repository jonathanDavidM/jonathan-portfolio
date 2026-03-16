import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <footer className="border-t bg-card py-8">
      <div className="mx-auto max-w-6xl px-6">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Jonathan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
