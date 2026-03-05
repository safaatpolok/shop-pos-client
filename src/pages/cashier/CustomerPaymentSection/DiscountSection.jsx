import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tag } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { selectDiscount, setDiscount } from "@/Redux Toolkit/features/Cart/CartSlice"

const DiscountSection = () => {
  // const [discount, setDiscount] = React.useState({
  //   type: "percentage",
  //   value: 0,
  // })
  const discount = useSelector(selectDiscount) || { type: "percentage", value: 0 }
  const dispatch = useDispatch();
  const handleDiscountChange = (e) => {
    const value = e.target.value;

    dispatch(setDiscount({ ...discount, value }))
  }

  return (
    <div className="p-4 border-b">
      <h2 className="text-lg font-semibold mb-2 flex items-center">
        <Tag className="w-5 h-5 mr-2" />
        Discount
      </h2>

      <div className="space-y-3">
        <Input
          type="number"
          placeholder="Enter discount amount"
          value={discount.value}
          onChange={handleDiscountChange}
        />

        <div className="flex gap-5">
          <Button
            className="flex-1"
            onClick={() =>
              dispatch(setDiscount({ ...discount, type: "percentage" }))
            }
            variant={discount.type === "percentage" ? "default" : "outline"}
          >
            %
          </Button>

          <Button
            className="flex-1"
            onClick={() =>
              dispatch(setDiscount({ ...discount, type: "fixed" }))
            }
            variant={discount.type === "fixed" ? "default" : "outline"}
          >
            $
          </Button>
        </div>
      </div>
    </div>
  )
}

export default DiscountSection
