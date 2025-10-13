import type { ChartConfig } from "@/components/ui/chart"

export const projects = [
    { id: 'proj-1', name: 'Downtown Tower' },
    { id: 'proj-2', name: 'Suburbia Gardens' },
    { id: 'proj-3', name: 'Westside Bridge' },
];

export const user = {
    name: 'Sarah Chen',
    email: 'sarah.chen@buildtrack.pro',
    avatar: 'user-avatar-1',
};

export const stats = [
    { name: 'Total Budget', value: '$5,000,000', change: '+2.5%', changeType: 'positive' as const, icon: 'dollar-sign' },
    { name: 'Total Spent', value: '$2,850,000', change: '+10.2%', changeType: 'negative' as const, icon: 'receipt' },
    { name: 'Materials Used', value: '12,500 units', change: '-1.8%', changeType: 'positive' as const, icon: 'brick-wall' },
    { name: 'Labor Costs', value: '$1,200,000', change: '+5%', changeType: 'negative' as const, icon: 'users' },
];

export const budgetOverview = {
    totalBudget: 5000000,
    spent: 2850000,
    breakdown: [
        { name: 'Materials', value: 950000, color: 'hsl(var(--chart-1))' },
        { name: 'Labor', value: 1200000, color: 'hsl(var(--chart-2))' },
        { name: 'Permits', value: 150000, color: 'hsl(var(--chart-3))' },
        { name: 'Subcontractors', value: 450000, color: 'hsl(var(--chart-4))' },
        { name: 'Miscellaneous', value: 100000, color: 'hsl(var(--chart-5))' },
    ]
};

export const materialUsageData = [
    { month: 'January', concrete: 400, steel: 240 },
    { month: 'February', concrete: 300, steel: 139 },
    { month: 'March', concrete: 200, steel: 980 },
    { month: 'April', concrete: 278, steel: 390 },
    { month: 'May', concrete: 189, steel: 480 },
    { month: 'June', concrete: 239, steel: 380 },
];

export const materialUsageChartConfig = {
    concrete: {
        label: 'Concrete (m³)',
        color: 'hsl(var(--chart-1))',
    },
    steel: {
        label: 'Steel (tons)',
        color: 'hsl(var(--chart-2))',
    },
} satisfies ChartConfig;

export const recentPayments = [
    { id: 'pay-001', worker: 'John Doe', amount: 1250.75, date: '2023-10-26', status: 'Paid' },
    { id: 'pay-002', worker: 'Jane Smith', amount: 1500.00, date: '2023-10-26', status: 'Paid' },
    { id: 'pay-003', worker: 'Mike Johnson', amount: 980.50, date: '2023-10-25', status: 'Paid' },
    { id: 'pay-004', worker: 'Emily Davis', amount: 1100.25, date: '2023-10-24', status: 'Paid' },
    { id: 'pay-005', worker: 'Robert Brown', amount: 1320.00, date: '2023-10-23', status: 'Pending' },
];

export const materials = [
    { id: 'mat-001', name: 'Ready-mix Concrete', category: 'Concrete', stock: 500, unit: 'm³', cost: 150, supplier: 'Cemex' },
    { id: 'mat-002', name: 'Rebar #5', category: 'Steel', stock: 2000, unit: 'tons', cost: 800, supplier: 'Gerdau' },
    { id: 'mat-003', name: 'Plywood Sheets', category: 'Lumber', stock: 1500, unit: 'sheets', cost: 25, supplier: 'Georgia-Pacific' },
    { id: 'mat-004', name: 'Drywall 4x8', category: 'Finishes', stock: 800, unit: 'sheets', cost: 12, supplier: 'USG' },
    { id: 'mat-005', name: 'PVC Pipe 4"', category: 'Plumbing', stock: 3000, unit: 'ft', cost: 2.5, supplier: 'Charlotte Pipe' },
];

export const reportData = {
    project: 'Downtown Tower',
    dateRange: 'Oct 1, 2023 - Oct 31, 2023',
    summary: {
        totalExpenses: 450000,
        materialCosts: 250000,
        laborCosts: 150000,
        otherCosts: 50000
    },
};
