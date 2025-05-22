import React, { forwardRef } from "react";
const Input = forwardRef(({ label, isTextArea = false, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-2 my-4">
      <label className="text-slate-900 font-bold">{label}</label>
      {isTextArea ? (
        <textarea
          ref={ref}
          {...props}
          className="rounded-md p-2 text-stone-200 font-semibold outline-none bg-slate-600"
        />
      ) : (
        <input
          ref={ref}
          {...props}
          className=" outline-none rounded-md p-2 text-stone-200 font-semibold bg-slate-600"
        />
      )}
    </div>
  );
});

export default Input;
