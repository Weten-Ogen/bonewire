import { cn } from "@/lib/utils"

interface TypographyLargeprops {
    children: string,
    className: string
}

export function TypographyLarge(props:TypographyLargeprops) {
    return <p className={cn("text-lg font-semibold",props.className)}>
        {props.children}
    </p>
  }
  