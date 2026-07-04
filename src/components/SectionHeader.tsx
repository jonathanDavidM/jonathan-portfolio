interface SectionHeaderProps {
  /** Two-digit section index, e.g. "01". */
  index: string;
  /** Short kicker label shown in mono next to the index. */
  kicker: string;
  /** The section heading. */
  title: string;
  /** Optional lead paragraph under the title. */
  lead?: string;
  className?: string;
}

/**
 * Editorial section header: an accent-lit "01 — KICKER" line above a large
 * display-font title. Shared across every section so the rhythm is consistent.
 */
function SectionHeader({
  index,
  kicker,
  title,
  lead,
  className,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <p className="flex items-center gap-3 font-mono text-caption uppercase text-muted-foreground">
        <span className="text-gradient font-semibold">{index}</span>
        <span
          aria-hidden
          className="h-px w-10 bg-gradient-to-r from-primary to-transparent"
        />
        {kicker}
      </p>
      <h2 className="mt-4 max-w-2xl font-display text-title font-semibold text-foreground">
        {title}
      </h2>
      {lead && (
        <p className="mt-4 max-w-2xl text-body text-muted-foreground">{lead}</p>
      )}
    </div>
  );
}

export default SectionHeader;
