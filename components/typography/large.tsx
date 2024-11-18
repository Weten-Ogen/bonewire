import { cn } from "@/lib/utils"

interface TypographyLargeprops{
    children: any,
    className:string
}

export function TypographyLarge(props:TypographyLargeprops) {
    return (<div className={cn("text-lg font-semibold",props.className)}>
        {props.children}
    </div>)
  }
  