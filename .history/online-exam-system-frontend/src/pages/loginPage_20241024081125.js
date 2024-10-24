import LoginForm from "../components/loginForm";
import Footer from "../components/footer";
import Logo from "../components/logo";

function Login () {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/exam');
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add login logic here
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white rounded-2xl shadow-xl p-6 w-[500px] flex flex-col items-center">
          <Logo 
            src="/images/logo_" 
            alt="Logo" 
          />
          <LoginForm onSubmit={handleSubmit} />
          <Footer onExamClick={handleClick} />
        </div>
      </div>
    );
  };
  
  export default Login;