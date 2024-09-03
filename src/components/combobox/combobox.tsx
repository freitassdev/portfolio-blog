import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { useState } from "react"

export interface IComboBoxItem {
    label: string
    value: string
}

export interface IComboBoxProps {
    defaultOpened?: boolean
    value?: string
    onOpenChange?: (open: boolean) => void
    onChange?: (value: string) => void
    itens: IComboBoxItem[];
    searchEnabled?: boolean
    placeholder?: string
    searchPlaceholder?: string
}

export default function ComboBox({
    placeholder = "Selecione uma opção...",
    searchPlaceholder = "Pesquisar...",
    defaultOpened = false,
    value = "",
    searchEnabled,
    itens,
    onOpenChange,
    onChange
}: IComboBoxProps) {
    const [open, setOpen] = useState<boolean>(false)
    const [currentValue, setCurrentValue] = useState<string>(value)

    function handleOpenChange(opened: boolean) {
        setOpen(!open)
        onOpenChange && onOpenChange(open)
    }

    function handleItemChange(value: string) {
        setCurrentValue(value)
        onChange && onChange(value)
    }

    return (
        <Popover open={open} onOpenChange={handleOpenChange}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? itens.find((item) => item.value === currentValue)?.label
                        : ""}
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    {searchEnabled && <CommandInput placeholder={searchPlaceholder} className="h-9"  />}
                    <CommandList>
                        <CommandEmpty>Nenhuma opção encontrada.</CommandEmpty>
                        <CommandGroup>
                            {itens.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => handleItemChange(currentValue)}
                                >
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            currentValue === item.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}