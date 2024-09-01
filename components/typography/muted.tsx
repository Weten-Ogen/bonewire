import { cn } from "@/lib/utils";

export function TypographyMuted({content,className}:typo) {
    return (
      <p className={cn("text-sm text-muted-foreground",className)}>
        {content}
        </p>
    )
  }
  