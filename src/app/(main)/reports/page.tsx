import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { reportData } from "@/lib/data";
import { Download, Calendar as CalendarIcon, FileCsv, FilePdf } from "lucide-react";

export default function ReportsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="font-headline text-3xl font-semibold">Reports</h1>
                <p className="text-muted-foreground">
                    Generate and export expense and progress reports.
                </p>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Generate Project Report</CardTitle>
                    <CardDescription>
                        Select a date range and format to export your project data.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                        <p className="font-medium mb-2 sm:mb-0">Select Date Range:</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className="w-full sm:w-auto justify-start text-left font-normal"
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    <span>{reportData.dateRange}</span>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="range"
                                    defaultMonth={new Date(2023, 9, 1)}
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <h3 className="font-medium">Summary for Selected Range</h3>
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4 text-sm">
                            <div className="rounded-lg border p-3">
                                <p className="text-muted-foreground">Total Expenses</p>
                                <p className="text-lg font-semibold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(reportData.summary.totalExpenses)}</p>
                            </div>
                            <div className="rounded-lg border p-3">
                                <p className="text-muted-foreground">Material Costs</p>
                                <p className="text-lg font-semibold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(reportData.summary.materialCosts)}</p>
                            </div>
                            <div className="rounded-lg border p-3">
                                <p className="text-muted-foreground">Labor Costs</p>
                                <p className="text-lg font-semibold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(reportData.summary.laborCosts)}</p>
                            </div>
                            <div className="rounded-lg border p-3">
                                <p className="text-muted-foreground">Other Costs</p>
                                <p className="text-lg font-semibold">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(reportData.summary.otherCosts)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-2">
                        <Button variant="outline">
                            <FileCsv className="mr-2 h-4 w-4" />
                            Export as CSV
                        </Button>
                        <Button>
                            <FilePdf className="mr-2 h-4 w-4" />
                            Download as PDF
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
