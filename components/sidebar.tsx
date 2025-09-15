"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Sidebar() {
  const acts = ["Act 1", "Act 2", "Act 3", "Act 4", "Interlude 1", "Interlude 2", "Interlude 3"];

  return (
    <div
      className={`hidden fixed lg:w-64 lg:block `}
    >
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-primary">
            Jump to Acts
          </h2>
          <div className="space-y-1">
            {acts.map((act) => (
              <Button
                key={act}
                variant="ghost"
                className="w-full justify-start font-normal"
                asChild
              >
                <Link href={`/#${act}`}>{act}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
      <Button
        variant="ghost"
        className="w-full justify-start font-normal self-end"
        asChild
      >
        <Link href={`https://github.com/CanOrhan/pathofleveling.com`}>
          Github
        </Link>
      </Button>
    </div>
  );
}
