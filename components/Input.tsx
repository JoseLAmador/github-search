import { forwardRef } from "react";
import type { Ref, InputHTMLAttributes } from "react";

const Input = forwardRef((props: InputHTMLAttributes<HTMLInputElement>, ref: Ref<HTMLInputElement>) => {
  const {
    ...rest
  } = props;
  return (
    <input
      ref={ref}
      className="block w-full border border-gray-300 rounded-md px-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900"
      {...rest}
      />
  )
});

Input.displayName = "Input";

export default Input;
