import type { FieldValues, Path, UseFormReturn } from "react-hook-form";
import Icon from "./Icon";

interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface SelectProps<T extends FieldValues> {
  form: UseFormReturn<T>;
  name: Path<T>;
  options: Option[];
  label?: string;
  placeholder?: string;
  id?: string;
  className?: string;
  disabled?: boolean;
}

const Select = <T extends FieldValues>({
  form,
  name,
  options,
  label,
  placeholder = "Tanlang...",
  id,
  className = "",
  disabled,
}: SelectProps<T>) => {
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

      <div className="relative">
        <select
          id={id ?? name}
          disabled={disabled}
          defaultValue=""
          className={`w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm text-slate-900 transition outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 [&:has(option[value='']:checked)]:text-slate-400 ${
            errorMessage
              ? "border-red-400 focus:border-red-500 focus:ring-red-100"
              : "border-slate-200 focus:border-blue-500 focus:ring-blue-100"
          } ${className}`}
          {...form.register(name)}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
          <Icon.chevronDown className="h-4 w-4" />
        </span>
      </div>

      {errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
export default Select;
