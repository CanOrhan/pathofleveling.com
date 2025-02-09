"use client";
import { SetStateAction, useEffect } from "react";

// Used to init a useState. 
export function useSetCheckedItems(setCheckedItems: { (value: SetStateAction<Record<string, boolean>>): void; }, storageItemName: string) {
  useEffect(() => {
    const savedCheckedItems = localStorage.getItem(storageItemName);
    if (savedCheckedItems) {
      setCheckedItems(JSON.parse(savedCheckedItems));
    }
  }, [setCheckedItems]);
}
