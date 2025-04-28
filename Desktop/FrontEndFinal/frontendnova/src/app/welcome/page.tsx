'use client';

import { useSearchParams } from 'next/navigation';

export default function WelcomePage() {
  const searchParams = useSearchParams();
  const name = searchParams?.get('name') ?? '';

  if (!name) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>No estás autorizado. Regresa al login.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-green-100">
      <div className="bg-white p-8 rounded shadow-md text-center space-y-4">
        <h1 className="text-2xl font-bold">¡Bienvenido, {name}!</h1>
        <p>Disfruta de tu lectura.</p>
      </div>
    </div>
  );
}
