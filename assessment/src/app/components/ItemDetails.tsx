import React from "react";

import { Item } from "../types/item";
import InputFeild from "./InputFelid";

interface ItemDetailsProps {
    itemData: Item;
    onChange: (feild: keyof Item, value: string | number) => void
}

const ItemDetails: React.FC<ItemDetailsProps> = ({ itemData, onChange }) => {
    return (
        <>
        <h2 className="text-h2 font-semiBold text-primary mb-4"> Item Details</h2>
        <div className="p-4 bg-gray-100 rounded-lg shadow-small border border-gray-200 bg-primary">
            
            <div className="grid grid-cols-2 gap-4">
                <InputFeild label="Item Name" value={itemData.name} onChange={(e)=> onChange('name', e.target.value)} />
                <InputFeild label="Quantity" value={itemData.quantity} onChange={(e)=> onChange('quantity',parseInt(e.target.value))} />
                <InputFeild label="Unit Price" value={itemData.unitPrice} onChange={(e)=> onChange('unitPrice', parseFloat(e.target.value))} />
                <InputFeild label="Date of Submission" value={itemData.dateOfSubmission} onChange={(e)=> onChange('dateOfSubmission', e.target.value)} />
                {/* <input label= "" */}
            </div>
        </div>
        </>
    )


}

export default ItemDetails;