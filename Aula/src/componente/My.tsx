import React from 'react';

interface CustomInputProps {
  type: 'text' | 'email' | 'number';
  defaultValue: string;
  placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, defaultValue, placeholder }) => {
  return (
    <input
      type={type}
      defaultValue={defaultValue}
      placeholder={placeholder}
      style={{ color: 'red' }}
    />
  );
};

export default CustomInput;
