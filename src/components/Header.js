import NavBar from "./NavBar";

const Header = (props) => {
    return (
        <header>
            <NavBar onShow={props.onShow}/>
                <h1 style={{fontFamily: "'Montserrat', sans-serif", marginTop: "60px", padding: "20px", fontSize: "70px"}} className="bg-secondary text-white text-center">The Generics</h1>
        </header>
    )
}

export default Header;