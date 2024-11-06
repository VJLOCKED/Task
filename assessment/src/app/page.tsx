'use client'
import Image from "next/image";
import React, { useState } from "react";
import ItemDetails from "../app/components/ItemDetails";
import { Item } from "./types/item";
import { Supplier } from "./types/supplier";
import CheckBox from "./components/checkbox";
import SupplierDetails from "./components/SupplierDetails";

const initrialItemData: Item = {
  name: "test",
  quantity: 1,
  unitPrice: 100,
  dateOfSubmission: "",
};

const initrialSupplierData: Supplier = {
  supplierName: "test",
  companyName: '',
  country: '',
  state: "",
  city: "",
  email: "",
  phone: "",
};
export default function Home() {
  const [showItem, setShowItem] = useState(false);
  const [itemData, setItemData] = useState(initrialItemData);
  const [showSupplier, setShowSupplier] = useState(false);
  const [supplierata, setSupplierData] = useState(initrialSupplierData);

  const handleItemChange = (feild: keyof Item, value: string | number) => {
    setItemData({ ...itemData, [feild]: value });
  };
  const handleSupplierChange = (feild: keyof Supplier, value: string | number) => {
    setSupplierData({ ...supplierata, [feild]: value });
  };
  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <header className="flex item-center justify-center space-x-6 mb-8">
        <h1 className="text-h1 font-bold text-primary">
          {" "}
          Inventary management system
        </h1>
        </header>
        <div className="flex items-center justify-center space-x-6 mb-8">
          <CheckBox label="Item" checked={showItem} onChange={setShowItem} />
          <CheckBox label="Supplier" checked={showSupplier} onChange={setShowSupplier} />
        </div>
        <div>
          {showItem && <ItemDetails itemData={itemData} onChange={handleItemChange} />}
          {showSupplier && <SupplierDetails supplierData={supplierata} onChange={handleSupplierChange} />}
        </div>
      
    </div>
  );
}
