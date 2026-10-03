import { Skeleton } from "./ui/Skeleton";

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-card p-4">
      <Skeleton className="aspect-square w-full rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-1/3" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-6 w-1/4 mt-2" />
      </div>
    </div>
  );
}
