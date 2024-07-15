import React from "react";

interface ControlledTextareaProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  name: string;
}

const Textarea: React.FC<ControlledTextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-grey900 mb-2">
        {label}
      </label>
      <textarea
        required
        id={id}
        name={name}
        className="block w-full border border-gray-300 rounded-lg p-4 placeholder-grey400 text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        rows={8}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default Textarea;
