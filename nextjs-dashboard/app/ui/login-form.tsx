import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Welcome to the Dashboard
        </h1>
        <p className="text-sm text-gray-500 mb-4">
          Authentication has been disabled. Click below to access the dashboard.
        </p>
        <Link
          href="/dashboard"
          className="flex h-10 items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 w-full"
        >
          Go to Dashboard <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Link>
      </div>
    </div>
  );
}
