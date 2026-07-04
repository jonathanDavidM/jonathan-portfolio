import { cn } from "@/lib/utils";

/** Small monospaced chip used for technologies across the site. */
function TechTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border px-2 py-0.5 font-mono text-caption text-muted-foreground",
        className
      )}
    >
      {children}
    </span>
  );
}

export default TechTag;
