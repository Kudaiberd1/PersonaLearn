import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-screen flex">
            <div
                className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-blue-500 text-white p-16 flex-col justify-between">
                <div className="text-2xl font-bold">PersonaLearn</div>

                <div>
                    <h1 className="text-6xl font-extrabold leading-tight">
                        404
                    </h1>
                    <p className="text-2xl font-semibold mt-4">
                        Страница не найдена
                    </p>
                    <p className="text-blue-100 mt-6 max-w-md">
                        Похоже, вы перешли по неверной ссылке или страница была удалена.
                    </p>
                </div>

                <div className="text-sm text-blue-100 opacity-80">
                    © {new Date().getFullYear()} PersonaLearn
                </div>
            </div>

            <div className="flex w-full lg:w-1/2 items-center justify-center bg-slate-50 p-8">
                <div
                    className="bg-white p-10 rounded-2xl shadow-lg border border-slate-200 w-full max-w-md text-center">
                    <h2 className="text-3xl font-bold text-slate-800 mb-4">
                        Упс! Ошибка 404
                    </h2>
                    <p className="text-slate-500 mb-8">
                        Запрашиваемая страница не существует.
                    </p>

                    <Link
                        to="/"
                        className="inline-flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 transition-colors text-white font-semibold py-3 rounded-xl"
                    >
                        Вернуться на главную
                    </Link>
                </div>
            </div>
        </div>
    );
}