import React from "react";

interface InputFeildProps {
    label : string;
    type? : string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFeild: React.FC<InputFeildProps> = ({ label, type = "text", value, onChange }) => {
    return (
        <div className="mb-4 rounded-lg">
            <label className="block text-body font-regular mb-1">{label}</label>
            <input type={type} value={value} onChange={onChange} 
             className="w-full p-3 border border-grey-300 rounded-small focus: ring  focus:ring-primary focus: border-primary"
            placeholder={`Enter ${label.toLocaleLowerCase()}`}
            />
        </div>
    );
}
export default InputFeild;