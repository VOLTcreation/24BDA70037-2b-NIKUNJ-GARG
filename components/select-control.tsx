"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { SelectOption } from "@/types/index";

interface SelectControlProps {
  selectLabel: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  groupLabel: string;
  placeholder?: string;
}

export function SelectControl({
  selectLabel,
  value,
  onValueChange,
  options,
  groupLabel,
  placeholder = "Select an option",
}: SelectControlProps) {
  return (
    <div className="flex items-center gap-4 relative">
      <label className="text-lg font-medium">{selectLabel}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="w-64 bg-white text-lg h-12">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent position="popper" sideOffset={4}>
          <div className="font-semibold px-2 py-1.5 text-sm text-muted-foreground">
            {groupLabel}
          </div>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}