import type { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface TextareaProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  rows?: number;
  disabled?: boolean;
}

const Textarea = <T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  id,
  className = "",
  rows = 4,
  disabled,
}: TextareaProps<T>) => {
  const errorMessage = form.formState.errors[name]?.message as
    | string
    | undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label
          htmlFor={id ?? name}
          className="text-sm font-medium text-slate-700"
        >
          {label}
        </label>
      )}

      <textarea
        id={id ?? name}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full resize-y rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 transition outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 ${
          errorMessage
            ? "border-red-400 focus:border-red-500 focus:ring-red-100"
            : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
        } ${className}`}
        {...form.register(name)}
      />

      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
export default Textarea;
