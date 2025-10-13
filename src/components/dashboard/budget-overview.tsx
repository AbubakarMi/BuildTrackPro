import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { budgetOverview } from '@/lib/data';

export default function BudgetOverview() {
  const { totalBudget, spent, breakdown } = budgetOverview;
  const spentPercentage = (spent / totalBudget) * 100;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Budget Overview</CardTitle>
        <CardDescription>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          }).format(spent)}{' '}
          spent of{' '}
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          }).format(totalBudget)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Progress value={spentPercentage} />
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Expense Breakdown</h3>
            <ul className="space-y-2 text-sm">
              {breakdown.map((item) => (
                <li key={item.name} className="flex justify-between">
                  <div className="flex items-center">
                    <span
                      className="mr-2 inline-block h-2 w-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span>{item.name}</span>
                  </div>
                  <span>
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      maximumFractionDigits: 0,
                    }).format(item.value)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
