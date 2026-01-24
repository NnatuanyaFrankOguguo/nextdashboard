'use client';

import { useEffect } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <ExclamationTriangleIcon className="w-10 text-red-500" />
      <h2 className="text-xl font-semibold text-center">Something went wrong!</h2>
      <p className="text-gray-500 text-center max-w-md">
        {error.message || 'An unexpected error occurred while loading invoices.'}
      </p>
      <button
        onClick={() => reset()}
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Try again"
      >
        Try again
      </button>
    </main>
  );
}
