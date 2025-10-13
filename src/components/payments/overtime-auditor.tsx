'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { getOvertimeAudit } from '@/app/actions';
import type { WorkerPaymentOvertimeAuditingOutput } from '@/ai/flows/worker-payment-auditing';
import { useToast } from '@/hooks/use-toast';
import { ScanSearch, Loader2, AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';

export default function OvertimeAuditor() {
  const [projectTimeline, setProjectTimeline] = useState('');
  const [workerPaymentLogs, setWorkerPaymentLogs] = useState('');
  const [auditResult, setAuditResult] = useState<WorkerPaymentOvertimeAuditingOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectTimeline.trim() || !workerPaymentLogs.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please fill in all fields.',
      });
      return;
    }

    setIsLoading(true);
    setAuditResult(null);

    const result = await getOvertimeAudit({ projectTimeline, workerPaymentLogs });

    if (result.success && result.data) {
      setAuditResult(result.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'AI Auditor Error',
        description: result.error,
      });
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-2'>
            <ScanSearch className="h-6 w-6 text-primary" />
            <CardTitle>AI Overtime Auditor</CardTitle>
        </div>
        <CardDescription>
          Paste project and payment data to audit for overtime discrepancies.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="timeline">Project Timeline</Label>
            <Textarea
              placeholder="e.g., 'Phase 1: Jan 1 - Mar 31. Phase 2: Apr 1 - Jun 30.'"
              id="timeline"
              value={projectTimeline}
              onChange={(e) => setProjectTimeline(e.target.value)}
              rows={3}
            />
          </div>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="logs">Worker Payment Logs</Label>
            <Textarea
              placeholder="e.g., 'John Doe, Week 1: 45 hours, $25/hr. Week 2: 42 hours, $25/hr.'"
              id="logs"
              value={workerPaymentLogs}
              onChange={(e) => setWorkerPaymentLogs(e.target.value)}
              rows={5}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <ScanSearch className="mr-2 h-4 w-4" />
            )}
            Audit Payments
          </Button>
        </form>

        {auditResult && (
          <div className="mt-6 space-y-4">
             <Alert>
                <AlertTriangle className="h-4 w-4" />
                <AlertTitle>Audit Results</AlertTitle>
                <AlertDescription className="space-y-2">
                    <div>
                        <h4 className="font-semibold">Discrepancies Found:</h4>
                        <p className="text-sm">{auditResult.discrepancies}</p>
                    </div>
                     <div>
                        <h4 className="font-semibold">Recommendations:</h4>
                        <p className="text-sm">{auditResult.recommendations}</p>
                    </div>
                </AlertDescription>
            </Alert>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
