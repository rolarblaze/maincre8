"use client";
import React, { ChangeEvent, KeyboardEvent, ReactNode } from 'react';

interface InputFieldProps {
  label?: string;
  type: 'text' | 'password' | 'email' | 'number';
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClick?: () => void;
  icon?: ReactNode; 
  readOnly?: boolean;
  disabled?: boolean;
  onEnterPressed?: () => void;
  classNames?: string;
  isRequired?: boolean;
  onInputIconClick?: () => void;
  error?: string;
  name?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  onKeyDown,
  onClick,
  icon,
  readOnly,
  disabled,
  onEnterPressed,
  classNames,
  isRequired,
  onInputIconClick,
  error,
  name 
}) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onEnterPressed) {
      onEnterPressed();
    }
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  return (
    <div className="w-full flex flex-col gap-1 text-left">
      {label && (
        <label className="text-sm text-grey900">
          {label} {isRequired && <span className="text-primary400">*</span>}
        </label>
      )}
      <div className={`flex items-center gap-3 p-2 border border-grey300 rounded-md md:p-4 ${classNames}`}>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={handleKeyDown}
          onClick={onClick}
          readOnly={readOnly}
          disabled={disabled}
          className={`w-full outline-none text-grey400 text-sm ${readOnly ? 'bg-grey200' : 'bg-transparent'} ${disabled ? 'cursor-not-allowed' : ''}`}
        />
        {icon && (
          <div className="cursor-pointer" onClick={onInputIconClick}>
            {icon}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default InputField;
