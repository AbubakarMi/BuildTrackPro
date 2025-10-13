
'use server';

import { suggestMaterials, SuggestMaterialsInput } from '@/ai/flows/material-tracking-ai';
import { workerPaymentOvertimeAuditing, WorkerPaymentOvertimeAuditingInput } from '@/ai/flows/worker-payment-auditing';

export async function getMaterialSuggestions(input: SuggestMaterialsInput) {
  try {
    const result = await suggestMaterials(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to get material suggestions.' };
  }
}

export async function getOvertimeAudit(input: WorkerPaymentOvertimeAuditingInput) {
  try {
    const result = await workerPaymentOvertimeAuditing(input);
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to perform overtime audit.' };
  }
}
