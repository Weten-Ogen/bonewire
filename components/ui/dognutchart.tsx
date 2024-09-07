"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export const description = "A donut chart"


interface dognutchart {
    chartConfig: ChartConfig,
    chartData:any[]
}


export function DognutChart({chartConfig,chartData  }:dognutchart) {
  return (
    <Card className="flex flex-col">
         <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="visitors"
              nameKey="browser"
              innerRadius={60}
              className="bg-red-600"
              width={30}
              height={30}
            />
          </PieChart  >
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
