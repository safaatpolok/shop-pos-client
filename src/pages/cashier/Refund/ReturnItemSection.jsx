import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { createdRefunds } from '@/Redux Toolkit/features/Refund/refundThunk';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const returnReasons = [
  "Wrong product",
  "Damage Product",
  "Not interested any more",
  "Other"
];

const refundMethods = ["bkash", "CARD", "CASH"];

const ReturnItemSection = ({ selectedOrder, setShowReturnReciptDialog }) => {
  const [returnReason, setReturnReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [refundMethod, setRefundMethod] = useState("bkash");
  const { branch } = useSelector(state => state.branch)
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()
  const processRefund = () => {
    setShowReturnReciptDialog(true)
    const refundDTO = {
      orderId: selectedOrder.id,
      branchId: branch?.id,
      cashierId: user.userProfile?.id,
      reson: returnReason,
      refundMethod: refundMethod
    }
    console.log("process refund", refundDTO)
    dispatch(createdRefunds(refundDTO))
  };




  return (
    <div className="p-4 w-1/2">
      <Card className="mt-4">
        <CardContent className="p-4 space-y-4">

          <div>
            <Label className="mb-2 block">Return Reason</Label>
            <Select value={returnReason} onValueChange={setReturnReason}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a reason" />
              </SelectTrigger>
              <SelectContent>
                {returnReasons.map(reason => (
                  <SelectItem key={reason} value={reason}>
                    {reason}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {returnReason === "Other" && (
            <div>
              <Label className="mb-2 block">Specify Reason</Label>
              <Textarea
                placeholder="Please specify the return reason"
                value={otherReason}
                onChange={(e) => setOtherReason(e.target.value)}
              />
            </div>
          )}

          <div>
            <Label className="mb-2 block">Refund Method</Label>
            <Select value={refundMethod} onValueChange={setRefundMethod}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select refund method" />
              </SelectTrigger>
              <SelectContent>
                {refundMethods.map(method => (
                  <SelectItem key={method} value={method}>
                    {method}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="pt-4 border-t space-y-3">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total Refund Amount:</span>
              <span>${selectedOrder?.totalAmount ?? 0}</span>
            </div>

            <Button
              onClick={processRefund}
              className="w-full py-6"
              disabled={returnReason}
            >
              Process Refund
            </Button>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ReturnItemSection;
