import LoginForm from "../components/loginForm";
import
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
            src="/path-to-your-logo.png" 
            alt="Logo" 
          />
          <LoginForm onSubmit={handleSubmit} />
          <Divider />
          <Footer onExamClick={handleClick} />
        </div>
      </div>
    );
  };
  
  export default Login;