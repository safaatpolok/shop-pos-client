import { Card, CardContent } from '@/components/ui/card'
import { Edit, Trash } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import AddPlanDialog from './AddPlanDialog'
import EditPlanDialog from './EditPlanDialog'

const plans = [
  {
    id: 1,
    name: "Basic Plan",
    price: 20,
    billingCycle: "Monthly",
    branches: 3,
    users: 10,
    products: 100,
    status: "Active",
  },
]

const Subscription = () => {
  const [openAddNewPlan, setOpenAddNewPlan] = useState(false);
  const [openEditPlan, setOpenEditPlan] = useState(false);

  const handleEdit = (plan) => {
    console.log("Edit plan:", plan)
  }

  const handleDelete = (plan) => {
    console.log("Delete plan:", plan)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">
          Subscriptions Plan
        </h1>

        <Button onClick={() => setOpenAddNewPlan(true)}>
          Add New Plan
        </Button>
      </div>

      {/* Table Card */}
      <Card>
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Billing Cycle</TableHead>
                <TableHead>Branches</TableHead>
                <TableHead>Users</TableHead>
                <TableHead>Products</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {plans.map((plan) => (
                <TableRow key={plan.id}>
                  <TableCell>{plan.name}</TableCell>
                  <TableCell>${plan.price}</TableCell>
                  <TableCell>{plan.billingCycle}</TableCell>
                  <TableCell>{plan.branches}</TableCell>
                  <TableCell>{plan.users}</TableCell>
                  <TableCell>{plan.products}</TableCell>

                  {/* Status Column */}
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded-md text-sm ${plan.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                        }`}
                    >
                      {plan.status}
                    </span>
                  </TableCell>

                  {/* Action Column */}
                  <TableCell className="text-right">
                    <div className="flex justify-end items-center gap-2">
                      <Button
                        variant="outline"
                        className="bg-green-50"
                        onClick={() => setOpenEditPlan(true)}
                      >
                        <Edit size={16} />
                      </Button>

                      <Button
                        variant="outline"
                        className="bg-red-50"
                        onClick={() => handleDelete(plan)}
                      >
                        <Trash size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Add Plan Dialog */}
      <AddPlanDialog
        open={openAddNewPlan}
        onOpenChange={setOpenAddNewPlan}
      />
      <EditPlanDialog
        open={openEditPlan}
        onOpenChange={setOpenEditPlan}
      />
    </div>
  )
}

export default Subscription