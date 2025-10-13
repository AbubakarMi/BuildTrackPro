'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { PlusCircle } from 'lucide-react';
import { recentPayments } from '@/lib/data';
import { Badge } from '../ui/badge';

export default function PaymentsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment History</CardTitle>
        <CardDescription>
          A complete log of all worker payments for this project.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Worker</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentPayments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.worker}</TableCell>
                <TableCell className="text-right">
                    {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    }).format(payment.amount)}
                </TableCell>
                <TableCell>{payment.date}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    variant={payment.status === 'Paid' ? 'default' : 'secondary'}
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
      <CardFooter className='justify-end'>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Payment Log
        </Button>
      </CardFooter>
    </Card>
  );
}
