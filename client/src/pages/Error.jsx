import { NavLink } from "react-router-dom"

export const Error = ()=>{
    return (
        <>
        <section id="error-page">
           <div className="content">
          <h2 className="header">404</h2>
           <h4>Sorry! Page not Found</h4>
           <p>
            Oops! It seems like the page you're trying to access dosen't exist.
            If you believe there's an issue, feel to report it, and we'll
            look into it.
           </p>
           <div className="btns">
              <NavLink to="/">Return home</NavLink>
              <NavLink to="/contact">Report Problem</NavLink>
           </div>
           </div>
        </section>
        </>
    )
}