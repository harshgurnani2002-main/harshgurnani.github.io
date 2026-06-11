'use client';

export default function Footer() {
  return (
    <footer className="bg-[#FAFAFA] pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-500">
            Designed &amp; Built by Harsh Gurnani
          </p>
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
