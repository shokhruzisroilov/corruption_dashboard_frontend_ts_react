import * as React from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover'
import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
} from '@/components/ui/command'

export type Option = { label: string; value: string }

type Texts = {
	placeholder?: string
	searchPlaceholder?: string
	emptyText?: string
}

type Props = {
	options: Option[]
	value?: string
	onChange?: (value: string) => void
	className?: string
	texts?: Texts
}

export function FilterSelect({
	options,
	value,
	onChange,
	className,
	texts = {
		placeholder: 'Viloyatni tanlang',
		searchPlaceholder: 'Qidiring...',
		emptyText: 'Topilmadi',
	},
}: Props) {
	const [open, setOpen] = React.useState(false)
	const [inner, setInner] = React.useState<string>('')
	const selected = value ?? inner

	const select = (v: string) => {
		if (value === undefined) setInner(v)
		onChange?.(v)
		setOpen(false)
	}

	const currentLabel = selected
		? options.find(o => o.value === selected)?.label
		: undefined

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					role='combobox'
					aria-expanded={open}
					className={cn(
						'justify-between rounded-lg border border-[#DEE0E3] bg-white',
						'hover:bg-white focus:bg-white active:bg-white',
						'shadow-[0px_1px_2px_0px_rgba(20,21,26,0.05)]',
						'font-normal text-[14px] leading-[20px] tracking-[-0.005em]',
						'text-[#0D1126A6]',
						className
					)}
				>
					{currentLabel ?? texts.placeholder}
					<ChevronDown className='ml-2 h-4 w-4 opacity-60' />
				</Button>
			</PopoverTrigger>

			<PopoverContent
				className={cn(
					'p-0 bg-white rounded-lg border border-[#DEE0E3]',
					className
				)}
			>
				<Command>
					<CommandInput
						placeholder={texts.searchPlaceholder}
						className='bg-white text-[14px] leading-[20px] tracking-[-0.005em] text-[#0D1126A6]'
					/>
					<CommandEmpty className='p-2 text-sm text-[#0D1126A6]'>
						{texts.emptyText}
					</CommandEmpty>
					<CommandGroup>
						{options.map(opt => (
							<CommandItem
								key={opt.value}
								value={opt.label}
								onSelect={() => select(opt.value)}
								className={cn(
									'cursor-pointer text-[14px] leading-[20px] tracking-[-0.005em]',
									'text-[#0D1126A6]'
								)}
							>
								<Check
									className={cn(
										'mr-2 h-4 w-4',
										selected === opt.value ? 'opacity-100' : 'opacity-0'
									)}
								/>
								{opt.label}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	)
}
