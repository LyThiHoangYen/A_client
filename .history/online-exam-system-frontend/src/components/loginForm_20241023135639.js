import

function LoginForm ({ onSubmit }) {
    return (
    <form onSubmit={onSubmit} className="w-full">
      <InputField
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        required
      />
      <InputField
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        required
      />
      <LoginButton />
    </form>
  );
};

export default LoginForm;