import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { recentPayments } from '@/lib/data';

export default function RecentPayments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Worker Payments</CardTitle>
        <CardDescription>
          An overview of the latest payments made to workers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Worker</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="hidden sm:table-cell">Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>
                  <div className="font-medium">{payment.worker}</div>
                </TableCell>
                <TableCell className="text-right">
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(payment.amount)}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {payment.date}
                </TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={
                      payment.status === 'Paid' ? 'default' : 'secondary'
                    }
                    className={payment.status === 'Paid' ? 'bg-green-500/80 dark:bg-green-600/80' : ''}
                  >
                    {payment.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
