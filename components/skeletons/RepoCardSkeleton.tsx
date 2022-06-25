export default function RepoCardSkeleton() {
  return (
    <div className="animate-pulse p-4 bg-white rounded shadow-xl flex flex-col space-y-2">
      <div className="text-end">
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-300 w-10 h-4" />
      </div>
      <div className="text-sm h-4 bg-gray-300 w-16 mb-1" />
      <div className="text-sm h-8 bg-gray-300 w-full mb-1" />
      <div className="text-sm h-4 bg-gray-300 w-10" />
    </div>
  );
}
