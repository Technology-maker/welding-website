import React from "react";

const baseStyles =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-extrabold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500/35 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

const variants = {
    default: "sheen-hover bg-[rgb(198,83,36)] text-white shadow-lg shadow-orange-700/20 hover:-translate-y-0.5 hover:bg-[rgb(174,68,26)] hover:shadow-xl hover:shadow-orange-700/25",
    destructive: "bg-red-600 text-white shadow-lg shadow-red-700/20 hover:bg-red-700",
    outline: "border border-slate-300/80 bg-white/84 text-slate-950 shadow-sm hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-800",
    secondary: "sheen-hover bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-800",
    ghost: "text-slate-800 hover:bg-slate-100",
    link: "text-[rgb(19,92,113)] underline-offset-4 hover:underline",
};

const sizes = {
    default: "min-h-11 px-5 py-2.5",
    sm: "min-h-10 px-4 py-2",
    lg: "min-h-12 px-7 py-3",
    icon: "h-11 w-11",
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
