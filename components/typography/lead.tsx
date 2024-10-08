import { cn } from "@/lib/utils"

interface TypographyLeadprops {
    children : string,
    className: string
}
export function TypographyLead(props: TypographyLeadprops) {
    return (
      <p className={cn("text-xl text-muted-foreground",props.className)}>
        {props.children}
      </p>
    )
  }
  