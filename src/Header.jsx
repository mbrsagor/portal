function Header() {
    return (
        <div style={{'display': 'flex', 'justifyContent': 'space-between', 'maxWidth': '1140px', 'margin': 'auto'}} className="header">
            <a href="/">Logo</a>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;
