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
import { materials } from '@/lib/data';

export default function MaterialsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Material Inventory</CardTitle>
        <CardDescription>
          A list of materials in your project inventory.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead className="text-right">In Stock</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {materials.map((material) => (
              <TableRow key={material.id}>
                <TableCell className="font-medium">{material.name}</TableCell>
                <TableCell>{material.category}</TableCell>
                <TableCell className="text-right">
                  {material.stock} {material.unit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className='justify-end'>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Add Material
        </Button>
      </CardFooter>
    </Card>
  );
}
