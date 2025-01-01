"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart'
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

// Function to generate upward trending data
const generateUpwardTrendData = (
  startValue: number,
  endValue: number,
  dataPoints: number,
  isSales = false
): number[] => {
  const data: number[] = [];

  for (let i = 0; i < dataPoints; i++) {
    let value;
    if (isSales) {
      // For sales, start higher and have a more dramatic increase
      const progress = i / (dataPoints - 1);
      value = startValue + (endValue - startValue) * Math.pow(progress, 0.7);
    } else {
      // For other metrics, start lower (0-25% range) and increase more gradually
      const startRange = endValue * 0.25;
      const initialValue = startValue + Math.random() * startRange;
      const progress = i / (dataPoints - 1);
      value = initialValue + (endValue - initialValue) * Math.pow(progress, 1.2);
    }

    // Add some randomness to avoid perfect lines, but ensure always increasing
    const randomFactor = 1 + (Math.random() * 0.1 - 0.05); // Random factor between 0.95 and 1.05
    value *= randomFactor;

    // Ensure the value doesn't exceed the end value
    value = Math.min(Math.round(value), endValue);

    // Ensure the value is always greater than the previous value
    if (data.length > 0 && value <= data[data.length - 1]) {
      value = data[data.length - 1] + 1;
    }

    data.push(value);
  }

  return data;
};

// Add this interface
interface DashboardData {
  [key: string]: MetricData[];
}

// Updated data with upward trends and appropriate starting points
const dashboardData: DashboardData = {
  daily: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day, index, array) => ({
    date: day,
    sales: generateUpwardTrendData(1000, 1500, array.length, true)[index],
    reach: generateUpwardTrendData(3000, 5000, array.length)[index],
    impressions: generateUpwardTrendData(9000, 15000, array.length)[index],
    conversions: generateUpwardTrendData(30, 60, array.length)[index],
  })),
  weekly: Array.from({ length: 7 }, (_, i) => ({
    date: `Week ${i + 1}`,
    sales: generateUpwardTrendData(5000, 9000, 7, true)[i],
    reach: generateUpwardTrendData(20000, 35000, 7)[i],
    impressions: generateUpwardTrendData(60000, 100000, 7)[i],
    conversions: generateUpwardTrendData(200, 350, 7)[i],
  })),
  monthly: (() => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const startIndex = Math.floor(Math.random() * 7); // Ensures we always have 6 months
    return months.slice(startIndex, startIndex + 6).map((month, index, array) => ({
      date: month,
      sales: generateUpwardTrendData(20000, 40000, array.length, true)[index],
      reach: generateUpwardTrendData(80000, 150000, array.length)[index],
      impressions: generateUpwardTrendData(240000, 450000, array.length)[index],
      conversions: generateUpwardTrendData(800, 1500, array.length)[index],
    }));
  })(),
}

const metrics = [
  { key: 'sales', label: 'Sales', prefix: '$', color: 'hsl(var(--chart-1))' },
  { key: 'reach', label: 'Reach', prefix: '', color: 'hsl(var(--chart-2))' },
  { key: 'impressions', label: 'Impressions', prefix: '', color: 'hsl(var(--chart-3))' },
  { key: 'conversions', label: 'Conversions', prefix: '', color: 'hsl(var(--chart-4))' },
]

interface MetricData {
  date: string;
  sales: number;
  reach: number;
  impressions: number;
  conversions: number;
  [key: string]: string | number; // Add index signature
}

export function MarketingDashboard() {
  const [selectedMetric, setSelectedMetric] = useState('sales')

  const calculateGrowth = (data: MetricData[], metric: string): string => {
    const firstValue = data[0][metric] as number;
    const lastValue = data[data.length - 1][metric] as number;
    const growthRate = ((lastValue - firstValue) / firstValue) * 100;
    return growthRate.toFixed(1);
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Marketing Dashboard</h2>
        <Tabs defaultValue="daily" className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <TabsList>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <Select value={selectedMetric} onValueChange={setSelectedMetric}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                {metrics.map((metric) => (
                  <SelectItem key={metric.key} value={metric.key}>
                    {metric.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {Object.entries(dashboardData).map(([period, data]) => (
            <TabsContent key={period} value={period} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((metric) => (
                  <Card key={metric.key}>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">
                        {metric.label}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">
                        {metric.prefix}
                        {data[data.length - 1][metric.key].toLocaleString()}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        +{calculateGrowth(data, metric.key)}% growth
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>{metrics.find(m => m.key === selectedMetric)?.label} Over Time</CardTitle>
                  <CardDescription>
                    Visualizing {selectedMetric} trends for the selected period
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="w-full aspect-[16/9]">
                    <ChartContainer config={{
                      [selectedMetric]: {
                        label: metrics.find(m => m.key === selectedMetric)?.label,
                        color: metrics.find(m => m.key === selectedMetric)?.color,
                      },
                    }} className="w-full h-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                          <XAxis 
                            dataKey="date"
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => value}
                          />
                          <YAxis 
                            width={50}
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => value.toLocaleString()}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Line
                            type="monotone"
                            dataKey={selectedMetric}
                            stroke={metrics.find(m => m.key === selectedMetric)?.color}
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </ChartContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

