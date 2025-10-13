'use server';

/**
 * @fileOverview Audits worker payment logs for potential overtime discrepancies using AI.
 *
 * - workerPaymentOvertimeAuditing - A function that audits worker payment logs for overtime discrepancies.
 * - WorkerPaymentOvertimeAuditingInput - The input type for the workerPaymentOvertimeAuditing function.
 * - WorkerPaymentOvertimeAuditingOutput - The return type for the workerPaymentOvertimeAuditing function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const WorkerPaymentOvertimeAuditingInputSchema = z.object({
  projectTimeline: z
    .string()
    .describe(
      'The project timeline, including start and end dates, and key milestones.'
    ),
  workerPaymentLogs: z
    .string()
    .describe('The worker payment logs, including hours worked and pay rates.'),
  standardWorkHours: z
    .number()
    .default(40)
    .describe('The standard work hours per week for a worker.'),
});
export type WorkerPaymentOvertimeAuditingInput = z.infer<
  typeof WorkerPaymentOvertimeAuditingInputSchema
>;

const WorkerPaymentOvertimeAuditingOutputSchema = z.object({
  discrepancies: z
    .string()
    .describe(
      'A summary of potential overtime discrepancies found in the worker payment logs.'
    ),
  recommendations: z
    .string()
    .describe(
      'Recommendations for resolving the identified overtime discrepancies.'
    ),
});
export type WorkerPaymentOvertimeAuditingOutput = z.infer<
  typeof WorkerPaymentOvertimeAuditingOutputSchema
>;

export async function workerPaymentOvertimeAuditing(
  input: WorkerPaymentOvertimeAuditingInput
): Promise<WorkerPaymentOvertimeAuditingOutput> {
  return workerPaymentOvertimeAuditingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'workerPaymentOvertimeAuditingPrompt',
  input: {schema: WorkerPaymentOvertimeAuditingInputSchema},
  output: {schema: WorkerPaymentOvertimeAuditingOutputSchema},
  prompt: `You are an expert in construction labor law and payment auditing.

You will analyze worker payment logs against project timelines to identify potential overtime discrepancies.

Consider the standard work hours per week, project timeline, and payment logs to determine if any workers were potentially underpaid or overpaid for overtime hours.

Standard Work Hours: {{{standardWorkHours}}}
Project Timeline: {{{projectTimeline}}}
Worker Payment Logs: {{{workerPaymentLogs}}}

Provide a summary of potential discrepancies and recommendations for resolving them.

Ensure that the output is clear, concise, and actionable for the contractor.

Discrepancies:
Recommendations: `,
});

const workerPaymentOvertimeAuditingFlow = ai.defineFlow(
  {
    name: 'workerPaymentOvertimeAuditingFlow',
    inputSchema: WorkerPaymentOvertimeAuditingInputSchema,
    outputSchema: WorkerPaymentOvertimeAuditingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
