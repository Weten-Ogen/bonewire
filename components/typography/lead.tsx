import { cn } from "@/lib/utils"

interface TypographyLeadprops {
    children : any,
    className: string
}
export function TypographyLead(props: TypographyLeadprops) {
    return (
      <div className={cn("text-xl text-muted-foreground",props.className)}>
        {props.children}
      </div>
    )
  }
  