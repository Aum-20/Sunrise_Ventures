import "../assets/css/signIn.css";

export default function Signin() {
  return (
    <div>

    
    <title>Admin Login</title>
    


    <div className="login-container">
        <h2>Admin Login</h2>
        <form action="/admin/signIn" method="post">
            <div className="input-group">
                <label for="email">Email </label>
                <input type="email" id="email" name="email" required  />
            </div>
            <div className="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required  />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
    </div>
  );
}
