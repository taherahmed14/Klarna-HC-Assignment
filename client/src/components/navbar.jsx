import "./navbar.css";

export const Navbar = () => {

    return(
        <div>
            <div className="navbarCont">
                <img className="logo" src="klarna_logo.png" alt="logo" />
                <div className="navDetails">
                    <div>Shop</div>
                    <div>How it works</div>
                    <div>Pay in 4</div>
                    <div>The shopping app</div>
                    <div>Help</div>
                </div>
                <div className="loginDetails">
                    <button>Log in</button>
                    <button>Get the app</button>
                </div>
            </div>
        </div>
    )
};