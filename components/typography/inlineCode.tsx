import { cn } from "@/lib/utils"

interface TypographyInlineCodeprops {
    className :string,
    children: any
}

export function TypographyInlineCode(props:TypographyInlineCodeprops) {
    return (
      <code className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",props.className)}>
        {props.children}
      </code>
    )
  }
  