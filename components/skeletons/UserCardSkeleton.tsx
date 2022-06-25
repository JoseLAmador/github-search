export default function UserCardSkeleton() {
  return (
    <div className="animate-pulse p-4 bg-white rounded shadow-xl flex items-center flex-col space-y-2">
      <div className="shrink-0">
        <div className="h-32 w-32 rounded bg-gray-300" />
      </div>
      <div className="text-sm h-4 bg-gray-300 w-12 mb-1" />
    </div>
  );
}
