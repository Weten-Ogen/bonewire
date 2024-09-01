import { cn } from "@/lib/utils";

export function TypographyLead({content,className}:typo) {
    return (
      <p className={cn("text-xl text-muted-foreground",className)}>
        {content}
      </p>
    )
  }
  