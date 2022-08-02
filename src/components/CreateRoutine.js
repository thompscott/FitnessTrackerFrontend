
function CreateRoutine () {
    const username = 'lksdjfk';
    const password = 'aldjfklsdjflsd'
    const message = "lakdjflksdjf"
    return(
        
        <div>
          <form className="login" onSubmit={console.log("submit")}>
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <input
              type="text"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type="submit">Login</button>
            <p>{message}</p>
          </form>
        </div>
    );
    
}

export default CreateRoutine;