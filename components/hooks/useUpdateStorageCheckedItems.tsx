"use client";
import { useEffect } from "react";

// Updates local storage as checkedItems change
export function useUpdateStorageCheckedItems(checkedItems: Record<string, boolean>, storageItemName: string) {
  useEffect(() => {
    localStorage.setItem(storageItemName, JSON.stringify(checkedItems));
  }, [checkedItems]);
}
