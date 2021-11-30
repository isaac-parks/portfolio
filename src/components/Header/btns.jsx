export default function Buttons({
  toggleMenu,
  toggleTheme,
  burger,
  themeColor,
  sun,
}) {
  return (
    <div className="buttons">
      <input
        id="colorBtn"
        onClick={toggleTheme}
        type="image"
        src={sun}
        style={{ backgroundColor: themeColor }}
        alt="Color Mode"
      />
      <input
        id="burgerBtn"
        onClick={toggleMenu}
        type="image"
        src={burger}
        alt="Menu"
      />
    </div>
  );
}
