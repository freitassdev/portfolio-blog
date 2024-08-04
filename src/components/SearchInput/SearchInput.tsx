'use client';
import { SearchIcon } from "lucide-react";
import { Input, InputProps } from "../ui/input";

interface SearchProps extends InputProps {}
 
function SearchInput(props: SearchProps) {
    const { className, ...restProps } = props;

    return (
        <div className="relative">
            <Input type="email" placeholder="Pesquisar..." className={`pr-10 ${className || ""}`} {...restProps} />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <SearchIcon className="w-5 h-5 text-muted-foreground" />
            </div>
        </div>
    )
}

export default SearchInput;