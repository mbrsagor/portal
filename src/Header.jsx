function logo() {
  return "Mbr Sagor";
}

function Header() {
  let menus = ["Home", "About", "Service", "Contact"];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "1140px",
        margin: "auto",
      }}
      className="header"
    >
      <a href="/">{logo()}</a>
      <div>
        <ul>
          {menus.map((menu) => (
            <li key={menu}>
              <a href="/">{menu}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
