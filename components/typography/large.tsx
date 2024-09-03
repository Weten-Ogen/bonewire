import { cn } from "@/lib/utils";
import { typo } from "@/types/next";

export function TypographyLarge({content,className}:typo) {
    return <div className={cn("text-lg font-semibold",className)}>
        {content}
        </div>
  }

  