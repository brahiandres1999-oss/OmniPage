import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

/** shadcn/ui Button variants adapted to OmniPage's RGB tokens and Tailwind 3. */
export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-[rgb(var(--action-fill))] text-[rgb(var(--on-action))] hover:bg-[rgb(var(--action-hover))]',
        outline: 'border border-[rgb(var(--border-rgb)/var(--border-active-alpha))] bg-[rgb(var(--bg-base))] text-[rgb(var(--text-primary))] hover:bg-[rgb(var(--bg-surface))]',
        ghost: 'text-[rgb(var(--text-secondary))] hover:bg-[rgb(var(--bg-surface))] hover:text-[rgb(var(--text-primary))]',
        link: 'text-[rgb(var(--accent))] underline-offset-4 hover:underline',
      },
      size: {
        default: 'min-h-11 px-4 py-2',
        sm: 'min-h-9 px-3 py-1.5',
        icon: 'h-11 w-11 p-2',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
);

/** Local shadcn/ui primitive. Astro renders it to HTML; no React hydration is required. */
export const Button = React.forwardRef<HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & { asChild?: boolean }
>(({ className, variant, size, asChild = false, type, ...props }, ref) => {
  const Component = asChild ? Slot : 'button';
  return <Component ref={ref} type={asChild ? type : (type ?? 'button')} data-slot="button"
    className={cn(buttonVariants({ variant, size, className }))} {...props} />;
});
Button.displayName = 'Button';
