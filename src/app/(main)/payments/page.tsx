import OvertimeAuditor from "@/components/payments/overtime-auditor";
import PaymentsTable from "@/components/payments/payments-table";

export default function PaymentsPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="font-headline text-3xl font-semibold">Worker Payments</h1>
                <p className="text-muted-foreground">
                    Audit payment logs and manage labor costs.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
                <div className="col-span-1 lg:col-span-3">
                    <PaymentsTable />
                </div>
                <div className="col-span-1 lg:col-span-2">
                    <OvertimeAuditor />
                </div>
            </div>
        </div>
    )
}
