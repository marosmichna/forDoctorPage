import { cn } from "@/utils/cn";
import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
      return (
        <input
          type={type}
          className={cn(
            "flex h-11 border px-3 py-3 text-sm outline-none",
            className
          )}
          ref={ref}
          {...props}
        />
      )
    }
)

export default Input;