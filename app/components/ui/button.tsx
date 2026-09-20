import { Button as ButtonPrimitive } from '@base-ui/react/button'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const buttonVariants = cva(
	"group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-border-focus focus-visible:ring-3 focus-visible:ring-border-focus/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-state-danger aria-invalid:ring-3 aria-invalid:ring-state-danger/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default: 'bg-action text-action-text hover:bg-action-hover',
				outline:
					'border-border-default bg-page hover:bg-surface-hover hover:text-text-primary aria-expanded:bg-surface-hover aria-expanded:text-text-primary',
				secondary:
					'bg-panel text-text-primary hover:bg-surface-hover aria-expanded:bg-panel aria-expanded:text-text-primary',
				ghost:
					'hover:bg-surface-hover hover:text-text-primary aria-expanded:bg-surface-hover aria-expanded:text-text-primary',
				destructive:
					'bg-state-danger-bg text-state-danger hover:bg-state-danger/20 focus-visible:border-state-danger/40 focus-visible:ring-state-danger/20',
				link: 'text-action underline-offset-4 hover:underline',
			},
			size: {
				default: 'h-8 gap-1.5 px-2.5 text-base has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
				xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
				sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-sm in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
				lg: 'h-9 gap-1.5 px-2.5 text-lg has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2',
				xl: "h-10 gap-2 rounded-[min(var(--radius-md),14px)] px-3 text-xl in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 [&_svg:not([class*='size-'])]:size-4",
				'2xl':
					"h-11 gap-2.5 rounded-[min(var(--radius-md),16px)] px-3.5 text-2xl in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 [&_svg:not([class*='size-'])]:size-5",
				'3xl':
					"h-12 gap-3 rounded-[min(var(--radius-md),18px)] px-4 text-3xl in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-3.5 has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-6",
				icon: 'size-8',
				'icon-xs':
					"size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
				'icon-sm': 'size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg',
				'icon-lg': 'size-9',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
)

function Button({
	className,
	variant = 'default',
	size = 'default',
	...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
	return <ButtonPrimitive data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }
