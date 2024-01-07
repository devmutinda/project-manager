import { forwardRef } from 'react';
const Input = forwardRef(function Input({ children, textarea, ...props }, ref) {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';
  let inputTag = <input ref={ref} {...props} className={classes} />;

  if (textarea) {
    inputTag = <textarea ref={ref} {...props} className={classes} />;
  }
  return (
    <p className="text-stone-600 mb-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {children}
      </label>
      {inputTag}
    </p>
  );
});

export default Input;
