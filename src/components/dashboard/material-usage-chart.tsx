'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import { materialUsageData, materialUsageChartConfig } from '@/lib/data';

export default function MaterialUsageChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Material Usage</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={materialUsageChartConfig}
          className="min-h-[300px] w-full"
        >
          <BarChart data={materialUsageData} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false}
            />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="concrete" fill="var(--color-concrete)" radius={4} />
            <Bar dataKey="steel" fill="var(--color-steel)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
