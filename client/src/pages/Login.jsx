import React, { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    //  sab k lie alag-alag banane se acha ese bna sakte hai
  });

  // handlling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value, 
      //  "[name]" ko iss karike se hum dynamic bna rhe hai toh usme username,email,password etc sab aa skta hai......
    });
  };

  //Handling the form Submission
  const handleSubmit = (e) =>{
       e.preventDefault();
       alert(user)
  }

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                {/* public folder ko directly access kar skate hai */}
                <img
                  src="/images/login.jpg"
                  alt="login image"
                  width="400"
                  height="400"
                />
              </div>

              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br></br>

                <form onSubmit={handleSubmit}> 
                {/* Iss form ko kese pta ki kab submit krna hai ?uske lie toh alasg se submit button hai na?? */}
                  

                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

               

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>

                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};


