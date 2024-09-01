import { cn } from "@/lib/utils"

export function TypographyList({content,className,listClass}:typolistprops) {
    return (
      <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2",className)}>
        {content.map(item =>  <li className={cn('',listClass)}>
        {item}
        </li>
    )}
      </ul>
    )
  }
  