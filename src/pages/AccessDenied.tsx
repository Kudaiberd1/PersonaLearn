import {Link} from 'react-router-dom';

export default function AccessDenied() {
    return (
        <div className="min-h-screen flex">
            <div
                className="hidden lg:flex w-1/2 bg-gradient-to-br from-red-600 to-red-500 text-white p-16 flex-col justify-between">
                <div className="text-2xl font-bold">PersonaLearn</div>

                <div>
                    <h1 className="text-6xl font-extrabold leading-tight">
                        403
                    </h1>
                    <p className="text-2xl font-semibold mt-4">
                        Access Denied
                    </p>
                    <p className="text-red-100 mt-6 max-w-md">
                        You do not have permission to access this page.
                        Please contact your administrator if you believe this is a mistake.
                    </p>
                </div>

                <div className="text-sm text-red-100 opacity-80">
                    © {new Date().getFullYear()} PersonaLearn
                </div>
            </div>

            <div className="flex w-full lg:w-1/2 items-center justify-center bg-slate-50 p-8">
                <div
                    className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200 w-full max-w-md text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        403 – Permission Required
                    </h2>
                    <p className="text-slate-500 mb-8">
                        Your account does not have the required role to view this page.
                    </p>

                    <div className="flex flex-col gap-3">
                        <Link
                            to="/"
                            className="inline-flex items-center justify-center w-full bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold py-3 rounded-xl"
                        >
                            Go to Home
                        </Link>

                        <Link
                            to="/login"
                            className="inline-flex items-center justify-center w-full bg-slate-100 hover:bg-slate-200 transition-colors text-slate-700 font-semibold py-3 rounded-xl"
                        >
                            Login with Different Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
