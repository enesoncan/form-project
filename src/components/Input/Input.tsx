import { useState, forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

import visibility from "../../assets/visibility.svg";
import visibilityOff from "../../assets/visibility-off.svg";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  onChange: (value: string) => void;
  type?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, onChange, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePasswordVisibility = () =>
      setShowPassword((show) => !show);

    return (
      <div className="flex flex-col relative">
        <input
          ref={ref}
          value={value}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          onChange={(e) => onChange(e.target.value)}
          {...props}
          className="min-w-80 border rounded outline-0 p-1 border-gray-300"
        />
        {type === "password" && (
          <div className="absolute flex right-2 top-0 bottom-0 opacity-60">
            {showPassword ? (
              <button type="button" onClick={handleTogglePasswordVisibility}>
                <img
                  src={visibilityOff}
                  alt="visibility off"
                  width={20}
                  height={20}
                />
              </button>
            ) : (
              <button type="button" onClick={handleTogglePasswordVisibility}>
                <img
                  src={visibility}
                  alt="visibility off"
                  width={20}
                  height={20}
                />
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
