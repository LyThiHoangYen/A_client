import { useNavigate } from 'react-router-dom';
import LoginForm from "../components/loginForm";
import Footer from "../components/footer";
import Logo from "../components/logo";
import logologin from "../images/logo_login.jpg"

function Login () {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/exam');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/exam');
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md flex flex-col items-center space-y-6">
          <Logo 
            src="/images/logo_login.jpg" 
            alt="Logo" 
            className="w-32 h-auto"
          />
          <LoginForm onSubmit={handleSubmit} className="w-full" />
          <Footer onExamClick={handleClick} className="mt-auto" />
        </div>
      </div>
    );
  };
  
  export default Login;
