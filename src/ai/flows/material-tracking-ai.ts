'use server';

/**
 * @fileOverview AI-powered material suggestion and categorization flow.
 *
 * - suggestMaterials - A function that suggests materials based on project description.
 * - SuggestMaterialsInput - The input type for the suggestMaterials function.
 * - SuggestMaterialsOutput - The return type for the suggestMaterials function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMaterialsInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('The description of the construction project.'),
});
export type SuggestMaterialsInput = z.infer<typeof SuggestMaterialsInputSchema>;

const SuggestMaterialsOutputSchema = z.object({
  suggestedMaterials: z
    .array(z.string())
    .describe(
      'An array of suggested material names relevant to the project description.'
    ),
  materialCategories: z
    .array(z.string())
    .describe('An array of suggested material categories.'),
});
export type SuggestMaterialsOutput = z.infer<typeof SuggestMaterialsOutputSchema>;

export async function suggestMaterials(
  input: SuggestMaterialsInput
): Promise<SuggestMaterialsOutput> {
  return suggestMaterialsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMaterialsPrompt',
  input: {schema: SuggestMaterialsInputSchema},
  output: {schema: SuggestMaterialsOutputSchema},
  prompt: `You are a construction project expert. Based on the project description, suggest a list of materials and material categories that would be required for the project.

Project Description: {{{projectDescription}}}

Output the suggested materials and their categories in JSON format.`, //Crucially, you MUST NOT attempt to directly call functions, use await keywords, or perform any complex logic within the Handlebars template string.
});

const suggestMaterialsFlow = ai.defineFlow(
  {
    name: 'suggestMaterialsFlow',
    inputSchema: SuggestMaterialsInputSchema,
    outputSchema: SuggestMaterialsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
