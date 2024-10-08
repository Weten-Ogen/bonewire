import { cn } from "@/lib/utils"

interface TypographyLargeprops{
    children: string,
    className:string
}

export function TypographyLarge(props:TypographyLargeprops) {
    return <div className={cn("text-lg font-semibold",props.className)}>
        {props.children}
    </div>
  }
  