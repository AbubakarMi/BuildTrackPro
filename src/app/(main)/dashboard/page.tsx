import StatCard from '@/components/dashboard/stat-card';
import { stats } from '@/lib/data';
import BudgetOverview from '@/components/dashboard/budget-overview';
import MaterialUsageChart from '@/components/dashboard/material-usage-chart';
import RecentPayments from '@/components/dashboard/recent-payments';
import { DollarSign, Receipt, BrickWall, Users } from 'lucide-react';

const iconMap = {
  'dollar-sign': DollarSign,
  'receipt': Receipt,
  'brick-wall': BrickWall,
  'users': Users,
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-semibold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back, here&apos;s a summary of your project.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon as keyof typeof iconMap];
          return <StatCard key={stat.name} {...stat} icon={<Icon />} />;
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <MaterialUsageChart />
        </div>
        <div className="lg:col-span-2">
          <BudgetOverview />
        </div>
      </div>

      <div>
        <RecentPayments />
      </div>
    </div>
  );
}
