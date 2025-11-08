import { Link } from "react-router-dom";

const Second = () => {
  return (
    <div className="min-h-screen relative bg-white">
      <div className="absolute top-8 right-8">
        <p className="text-xl text-black">Спасибо, что выбрали меня.</p>
      </div>
      <div className="absolute top-20 right-8">
        <Link 
          to="/" 
          className="text-lg text-black hover:underline"
        >
          ← Назад на главную
        </Link>
      </div>
    </div>
  );
};

export default Second;