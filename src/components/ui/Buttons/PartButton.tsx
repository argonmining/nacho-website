import { cn } from '@/lib/utils';
import { usePawCursor } from '@/hooks/usePawCursor';
import PawCursor from '@/components/ui/PawCursor';
import { ReactNode } from 'react';

interface PartButtonProps {
	active?: boolean;
	icon?: ReactNode;
	onClick?: () => void;
	className?: string;
	children?: ReactNode;
}

export function PartButton({ active = false, icon, onClick, className, children }: PartButtonProps) {
	const { cursorState, handlers } = usePawCursor();

	return (
		<>
			<button
				className={cn(
					'part-button flex items-center gap-3 rounded-full border-2 border-primary bg-background px-6 py-3 text-xl font-bold transition-all hover:scale-105 active:scale-95',
					active && 'bg-primary text-background',
					className
				)}
				onClick={onClick}
				{...handlers}
			>
				{icon} {children}
			</button>
			<PawCursor {...cursorState} />
		</>
	);
}
