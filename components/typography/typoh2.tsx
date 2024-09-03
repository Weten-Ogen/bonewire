import { cn } from "@/lib/utils"
import { typo } from "@/types/next"

export function TypographyH2({content,className}:typo) {
    return (
      <h2 className={cn("scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0",className)}>
        {content}
      </h2>
    )
  }
  