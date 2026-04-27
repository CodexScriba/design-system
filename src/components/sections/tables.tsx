import { SectionWrapper } from "./section-wrapper"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const INVOICES = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV-003", status: "Overdue", method: "Bank Transfer", amount: "$350.00" },
  { id: "INV-004", status: "Paid", method: "Credit Card", amount: "$450.00" },
  { id: "INV-005", status: "Paid", method: "PayPal", amount: "$550.00" },
  { id: "INV-006", status: "Pending", method: "Credit Card", amount: "$200.00" },
]

function StatusBadge({ status }: { status: string }) {
  const variant =
    status === "Paid"
      ? "secondary"
      : status === "Pending"
        ? "outline"
        : "destructive"
  return <Badge variant={variant}>{status}</Badge>
}

export function TablesSection() {
  return (
    <SectionWrapper
      id="tables"
      title="Tables"
      description="Data tables with headers, status badges, and footer."
    >
      <Table>
        <TableCaption>A list of recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {INVOICES.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.id}</TableCell>
              <TableCell>
                <StatusBadge status={invoice.status} />
              </TableCell>
              <TableCell>{invoice.method}</TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$1,950.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </SectionWrapper>
  )
}
