import { cn } from "@/lib/utils"

interface TypographyMutedprops {
    children: any,
    className: string
}

export function TypographyMuted(props:TypographyMutedprops) {
    return (
      <div className={cn("text-sm text-muted-foreground", props.className)}>
        {props.children}
      </div>
    )
  }
  