import { cn } from "@/lib/utils"

interface TypographyMutedprops {
    children: string,
    className: string
}

export function TypographyMuted(props:TypographyMutedprops) {
    return (
      <p className={cn("text-sm text-muted-foreground", props.className)}>
        {props.children}
        </p>
    )
  }
  