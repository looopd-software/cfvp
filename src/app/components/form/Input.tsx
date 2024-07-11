interface Props {
  id: string;
  label: string;
  placeholder: string;
  required: boolean;
  wrapperWidthClassName?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  disabled?: boolean;
  className?: string;
}

export default function Input({
  id,
  label,
  placeholder,
  required,
  name,
  value,
  onChange,
  wrapperWidthClassName = 'w-80',
  type = 'text',
  disabled = false,
  className = '',
}: Props) {
  return (
    <div
      className={`mb-4 font-secondary flex flex-col ${wrapperWidthClassName}`}
    >
      <label
        className="text-black text-base font-semibold mb-2 capitalize"
        htmlFor={id}
      >
        {label} {required && <span className="">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className={`bg-gray rounded-[4px] py-2 px-4 ${className} placeholder-darkgray`}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
      />
    </div>
  );
}
