import React from 'react';

interface CheckBoxProps {
    label: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
}

const CheckBox: React.FC<CheckBoxProps> = ({ label, checked, onChange }) => {
    return (

        <label className='flex items-center space-x-2 text-body font-regular'>
            <input type="checkbox" checked={checked} onChange={e => onChange(e.target.checked)}  className='rounded'/>
            <span>{label}</span>
        </label>
    )
}

export default CheckBox;