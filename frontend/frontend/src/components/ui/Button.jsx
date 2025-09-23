import React from "react";

const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    outline: "border border-gray-300 bg-white hover:bg-gray-100",
    secondary: "bg-gray-200 text-black hover:bg-orange",
    ghost: "hover:bg-gray-100",
    link: "text-blue-600 underline-offset-4 hover:underline",
};

const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
};

const Button = React.forwardRef(
    ({ children, className = "", variant = "default", size = "default", ...props }, ref) => {
        const variantClasses = variants[variant] || variants.default;
        const sizeClasses = sizes[size] || sizes.default;

        return (
            <button
                ref={ref}
                className={`${baseStyles} ${variantClasses} ${sizeClasses} ${className}`}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;
