import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'
interface ButtonProps {
     children: ReactNode;
     className?: string;
}
const Button = ({ children, className }: ButtonProps) => {
     return (
          <button className={cn(className, 'px-8 py-2  bg-primary text-white rounded-md cursor-pointer')}>{children}</button>
     )
}

export default Button;