import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white shadow-lg rounded-xl text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome User</h1>
        <p className="mb-6 text-gray-600">Sign in to access Details</p>
        <Link
          href="/api/auth/login"
          className="px-4 py-2 bg-amber-400 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Login with Auth0
        </Link>
      </div>
    </div>
  );
}
