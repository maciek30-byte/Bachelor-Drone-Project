import { useId } from 'react';
import { ChangeEvent } from 'react';
interface FormFieldProps {
    label: string;
    type: 'text' | 'number' | 'select';
    options?: string[];
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const FormField = ({ label, type, options }: FormFieldProps) => {
    const id = useId();

    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>

            {type === 'select' ? (
                <select id={id} name={id} className="mt-1 block w-full p-2 border border-gray-300 rounded-md">
                    {options?.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    id={id}
                    name={id}
                    type={type}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
            )}
        </div>
    );
};
