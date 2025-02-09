import { useState } from "react";

export const useStorageItemName = () => {
  const state = useState<string>();
  const v = state[0] ?? "checkedItems";
  return [v, state[1]] as const;
};
