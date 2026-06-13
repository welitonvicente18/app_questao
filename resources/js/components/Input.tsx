import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

export default function Input({ label, error, className, id, ...props }: InputProps) {
    const inputId = id || props.name;

    return (
        <div className="flex flex-col gap-1 w-full">
            {label && (
                <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}
            <input
                id={inputId}
                className={`
                    w-full rounded-md border px-4 py-2 transition duration-200 focus:outline-none focus:ring-2 
                    ${error 
                        ? 'border-red-500 focus:ring-red-200' 
                        : 'border-gray-300 focus:ring-slate-400 focus:border-slate-500'
                    }
                    ${className || ''}
                `}
                {...props}
            />
            {error && (
                <span className="text-xs font-semibold text-red-500 mt-0.5">
                    {error}
                </span>
            )}
        </div>
    );
}
