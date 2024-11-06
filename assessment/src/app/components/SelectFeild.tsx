import React from "react";

interface SelectFeildProps {
    options: string[];
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    value: string;
    label: string;
}

const SelectFeild: React.FC<SelectFeildProps> = ({ options, onChange, value, label }) => {
    return (
        <div className="mb-4">
            <label className="block text-body font-regular mb-1">{label}</label>
            <select value={value} onChange={onChange} className="w-full p-3 border border-grey-300 rounded-small focus: ring  focus:ring-primary focus: border-primary">
                {options?.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectFeild;