import React from "react";
interface InputProps {
  name: string;
  id?: string;
  label: string;
  type: "text" | "email" | "number" | "password";
  register: any;
}
const Input: React.FC<InputProps> = ({
  name,
  id,
  label,
  type,
  register,
  ...props
}) => {
  return (
    <>
      <div className="relative">
        <input
          name={name}
          id={name}
          type={type}
          {...register(name)}
          {...props}
          className="block rounded-sm px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700
        appearance-none focus:outline-none focus:ring-0 peer
    "
          placeholder=" "
        />
        <label
          htmlFor={name}
          className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6
        peer-placeholder-shown:scale-100
        peer-placeholder-shown:translate-y-0
        peer-focus:scale-75
        peer-focus:-translate-y-3"
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default Input;
