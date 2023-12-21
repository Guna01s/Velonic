import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import { Control } from 'react-hook-form';

interface PasswordInputProps {
  name: string;
  placeholder?: string;
  refCallback?: any;
  errors: any;
  control?: Control<any>;
  register?: any;
  className?: string;
}

/* Password Input */
const PasswordInput1 = ({
  name,
  placeholder,
  refCallback,
  errors,
  register,
  className,
}: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <InputGroup className="mb-3">
      <Form.Control
        type={showPassword ? 'text' : 'password'}
        placeholder={placeholder}
        name={name}
        id={name}
        ref={(r: HTMLInputElement) => {
          if (refCallback) refCallback(r);
        }}
        className={className}
      />
      <InputGroup.Text
        className="cursor-pointer"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? 'Hide' : 'Show'}
      </InputGroup.Text>
    </InputGroup>
  );
};

export default PasswordInput1;
