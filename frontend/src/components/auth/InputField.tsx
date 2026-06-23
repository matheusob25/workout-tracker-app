type InputProps = {
    label: string
    type: string
    placeholder: string
    error?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export function InputField({
    label,
    type,
    placeholder,
    error,
    ...props

}: InputProps) {
    return(
        <div className="flex flex-col gap-2">
            <label className="font-medium">
                {label}
            </label>
            <input type={type}
                placeholder={placeholder} 
                className= "border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500" 
                {...props}

            />

            {error && (
                <span className="text-red-500 text-sm">
                    {error}
                </span>
            )}
        </div>
    )
}