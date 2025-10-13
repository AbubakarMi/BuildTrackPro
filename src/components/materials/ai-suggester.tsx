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
import { getMaterialSuggestions } from '@/app/actions';
import type { SuggestMaterialsOutput } from '@/ai/flows/material-tracking-ai';
import { useToast } from '@/hooks/use-toast';
import { Wand2, Loader2 } from 'lucide-react';
import { Badge } from '../ui/badge';

export default function AiSuggester() {
  const [description, setDescription] = useState('');
  const [suggestions, setSuggestions] = useState<SuggestMaterialsOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Please enter a project description.',
      });
      return;
    }

    setIsLoading(true);
    setSuggestions(null);

    const result = await getMaterialSuggestions({ projectDescription: description });

    if (result.success && result.data) {
      setSuggestions(result.data);
    } else {
      toast({
        variant: 'destructive',
        title: 'AI Suggester Error',
        description: result.error,
      });
    }
    setIsLoading(false);
  };

  return (
    <Card>
      <CardHeader>
        <div className='flex items-center gap-2'>
            <Wand2 className="h-6 w-6 text-primary" />
            <CardTitle>AI Material Suggester</CardTitle>
        </div>
        <CardDescription>
          Describe your project, and let AI suggest materials and categories.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid w-full gap-1.5">
            <Label htmlFor="description">Project Description</Label>
            <Textarea
              placeholder="e.g., 'Building a two-story residential house with a wooden deck and concrete foundation.'"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Wand2 className="mr-2 h-4 w-4" />
            )}
            Suggest Materials
          </Button>
        </form>

        {suggestions && (
          <div className="mt-6 space-y-4">
            <div>
              <h4 className="font-semibold">Suggested Materials:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {suggestions.suggestedMaterials.map((material, i) => (
                  <Badge key={i} variant="secondary">{material}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold">Suggested Categories:</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {suggestions.materialCategories.map((category, i) => (
                  <Badge key={i} variant="outline">{category}</Badge>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
