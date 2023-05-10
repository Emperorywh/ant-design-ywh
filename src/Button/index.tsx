import React from "react";

export interface ButtonProps  extends React.HTMLAttributes<HTMLDivElement> {
    
}

const Button: React.FC<ButtonProps> = (props) => {
    return <button>按钮</button>
}

export default Button;