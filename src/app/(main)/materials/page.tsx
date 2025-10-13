import AiSuggester from "@/components/materials/ai-suggester"
import MaterialsTable from "@/components/materials/materials-table"

export default function MaterialsPage() {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-headline text-3xl font-semibold">Materials</h1>
        <p className="text-muted-foreground">
          Track and manage all materials for your project.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
            <MaterialsTable />
        </div>
        <div className="lg:col-span-2">
            <AiSuggester />
        </div>
      </div>
    </div>
  )
}
