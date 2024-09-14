import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

type LogoButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
    icon: React.ReactNode;
    buttonText: string;
    variant?: 'withSolid' | 'noSolid' | 'noText' | 'infoBtn';
};

const LogoButton = ({ icon, buttonText, className, variant, ...props }: LogoButtonProps) => {
  return (
    <button
        className={cn(buttonVariants({ variant }), className)}
        {...props}
    >
        <div className="flex items-center justify-around">
            <span className="mr-1">{icon}</span>
            <span>{buttonText}</span>
        </div>
    </button>
  )
}

const buttonVariants = cva(
    ' font-semibold hover:opacity-80',
    {
        variants: {
            variant: {
                withSolid: 'text-[#141414] border-2 border-[#D6D6D6] rounded-md px-4 py-2',
                noSolid: 'text-[#5C5C5C] rounded-md px-4 py-2',
                noText: 'bg-[#C1121E] text-white h-11 w-11 flex justify-center items-center px-4 py-2',
                infoBtn: 'text-[#5C5C5C]'
            },
        },
        defaultVariants: {
            variant: 'withSolid',
        },
    },
);

export default LogoButton;