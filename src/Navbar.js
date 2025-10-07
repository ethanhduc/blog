const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Ethan Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{ //dynamic value is an object
                    color: "white",
                    backgroundColor: '#f1355d',
                    borderRadius: '8px'
                }}>New Blog</a>
            </div>
        </nav>
    );
}
 
export default Navbar;