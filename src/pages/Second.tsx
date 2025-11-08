import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="absolute top-8 right-8">
        <Link 
          to="/" 
          className="text-lg text-black hover:underline"
        >
          ← Назад на главную
        </Link>
      </div>
      <div className="absolute bottom-8 left-8">
        <h1 className="text-6xl font-bold text-black">Вторая страница</h1>
        <p className="text-2xl text-black mt-2">Добро пожаловать!</p>
      </div>
    </div>
  );
};

export default Second;
