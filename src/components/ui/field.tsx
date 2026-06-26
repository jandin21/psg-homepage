import { useController } from "react-hook-form"

export function Field({
  label,
  name,
  type = "text",
  required,
  control,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  control: any
}) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground" htmlFor={name}>
        {label}
        {required && <span className="text-bordeaux"> *</span>}
      </label>
      <input
        id={name}
        type={type}
        {...field}
        className={`w-full border border-input bg-background px-4 py-3 text-sm focus:border-bordeaux focus:outline-none ${error ? "border-destructive" : ""}`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error.message}</p>}
    </div>
  )
}
