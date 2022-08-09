import { useState } from "react";

function LoginForm() {
  // variable that determines if password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // function is called when the checkbox is checked/unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <form className="form">
        <div>
            <input type="email" placeholder="Enter email here" className="textbox"/>
        </div>

        <div>
            <input type={isShown ? "text" : "password"} placeholder="Enter password here" className="textbox"/>
        </div>

        <div className="checkbox">
          <label for="checkbox">Show password?</label>
          <input id="checkbox" type="checkbox" checked={isShown} onChange={togglePassword} />
        </div>

        <button>Sign In</button>
      </form>
    </div>
  );
}

export default LoginForm;