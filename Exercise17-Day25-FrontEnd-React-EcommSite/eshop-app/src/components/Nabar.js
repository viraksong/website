
import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-primary" data-bs-theme="dark">
                <div className="container-fluid">  
                    <Link to="/">
                        <img src="img/icons8-shopping-bag-100.png" alt="iconLog" className="w-50 rounded-circle bg-light"/>
                    </Link>
                    
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li> 
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            
                        </ul>                    
                        <ul className="navbar-nav sm-auto mt-2 mt-lg-0">
                        {/* {<!-- login -->} */}
                        <li className="nav-item">
                            {/* <!-- Modal trigger button --> */}
                            {/* <!-- data-bs-toggle="modal" specify on click button data-bs-target="#modalSignin" target class modal at id="modalSignin" --> */}
                            <Link className="nav-link active" to="#" role="button" data-bs-toggle="modal" data-bs-target="#modalSignin">Login</Link>
                            
                            {/* <!-- Modal Body -->
                            <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard --> */}
                            {/* <!-- <div className="modal fade  p-4 py-md-5 text-light p-3" tabindex="-1" role="dialog" id="modalSignin" > --> */}
                            {/* <!-- text-light change text to light in modal; otherwise, all look dark --> */}
                            {/* <!-- py-md-5 md-5 is medium breakpoint at 5 py is vertical padding --> */}
                            {/* <!-- fade fading effect --> */}
                            {/* <!-- tabindex="-1" not allow to use keyword tab --> */}
                            <div className="modal fade p-4 py-md-5 text-light p-3" id="modalSignin" tabindex="-1" data-bs-backdrop="static" data-bs-keyboard="false" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                {/* <!--shadow  Default level box shadows --> */}
                                <div className="modal-content rounded-4 shadow ">

                                <div className="modal-header p-5 pb-4 border-bottom-0">
                                    {/* <!--fw-bold font-weight: bold --> 
                                    <!--fs-2 font-size-->               */}
                                    <h1 className="fw-bold mb-0 fs-2">Sign in</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                            
                                <div className="modal-body p-5 pt-0">
                                    <form className="">
                                    
                                    {/* <!-- https://www.w3schools.com/bootstrap5/bootstrap_form_floating_labels.php -->
                                    <!-- With floating labels, you can insert the label inside the input field, and make them float/animate when you click on the input field: --> */}
                                    <div className="form-floating mb-3">
                                        {/* <!-- required must fill email and password before submit --> */}
                                        <input type="email" className="form-control rounded-3 " id="floatingInput" placeholder="name@example.com" required/>
                                        <label for="floatingInput">name@domain.com*</label>
                                    </div>

                                    
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Password" required/>
                                        <label for="floatingPassword">Password*</label>
                                    </div>
                                    {/* <!-- w-100 change button size to max width form --> */}
                                    <button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Login</button>

                                    </form>
                                </div>

                                {/* <div className="modal-footer position-absolute bottom-0 start-50 translate-middle-x"> */}
                                    {/* <!-- <div className="modal-footer sticky-bottom"></div> --> */}
                                    {/* &copy; E-Shop  */}
                                {/* </div> */}
                        
                                </div>
                            </div>
                            </div>

                        </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar 