import React, { useEffect, useState } from "react";

import { Supplier } from "../types/supplier";
import InputFeild from "./InputFelid";
import SelectFeild from "./selectFeild";

interface ItemDetailsProps {
    supplierData: Supplier;
    onChange: (feild: keyof Supplier, value: string | number) => void
}

// const countryOptions = [
//      "USA",
//      "UK",
//      "Canada"
// ]

const ItemDetails: React.FC<ItemDetailsProps> = ({ supplierData, onChange }) => {

    const [countryOptions, setCountryOptions ] = useState<string[]>([])
    const [stateOptions, setStateOptions] = useState<string[]>([])

    useEffect(() => {
        // if(supplierData.country){
        //     setCountryOptions(getCountryStates(supplierData.country))
        // }

        const fetchCountries = async () => {
            try{
                const response = await fetch('https://apis-technical-test.conqt.com/Api/countrystatecity/Get-All-CountryList')
                const data = await response.json()

                const countries = data?.data.countyList?.map((country: {name:string}) => country?.name)

                console.log('countries:', countries, data)
                setCountryOptions(countries)
                // setCountryOptions(data.countries)
            }catch (err){
                console.error(err)  
            }
        }

        fetchCountries()
    }, [supplierData.country])

    return (
        <>
        <h2 className="text-h2 font-semiBold text-primary mb-4"> Supplier Details</h2>
        <div className="p-4 bg-gray-100 rounded-lg shadow-small border border-gray-200 bg-tertiary">
            
            <div className="grid grid-cols-2 gap-4">
                <InputFeild label="Supplier Name" value={supplierData.supplierName} onChange={(e)=> onChange('supplierName', e.target.value)} />
                <InputFeild label="Company Name" value={supplierData.companyName} onChange={(e)=> onChange('companyName', e.target.value)} />
                 <SelectFeild label="country" value={supplierData.country} options={countryOptions} onChange={(e) => onChange('country', e.target.value)}  />
                <InputFeild label="state" value={supplierData.state} onChange={(e)=> onChange('state', e.target.value)} /> 
                <InputFeild label="city" value={supplierData.city} onChange={(e)=> onChange('city', e.target.value)} />
                <InputFeild label="Email Adress" value={supplierData.email} onChange={(e)=> onChange('email', e.target.value)} />
                <InputFeild label="Phone Number" value={supplierData.phone} onChange={(e)=> onChange('phone', e.target.value)} />
                {/* <InputFeild label="city" value={supplierData.city} onChange={(e)=> onChange('city', e.target.value)} /> */}
            </div>
        </div>
        </>
    )


}

export default ItemDetails;