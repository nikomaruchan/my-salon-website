// src/components/common/Button.jsx
import React from 'react';

function Button({ children, variant = 'primary', onClick, disabled = false }) {
    const baseClasses = 'px-4 py-2 rounded font-semibold transition-colors';
    
    const variantClasses = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-600 text-white hover:bg-red-700',
    };
    
    const classes = `${baseClasses} ${variantClasses[variant]}`;
    
    return (
        <button 
        className={classes}
        onClick={onClick}
        disabled={disabled}
        >
        {children}
        </button>
    );
}

export default Button;