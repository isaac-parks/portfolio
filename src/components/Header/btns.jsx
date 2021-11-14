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
        className="colorBtn"
        onClick={toggleTheme}
        type="image"
        src={sun}
        style={{ backgroundColor: themeColor }}
        alt="Color Mode"
      />
      <input onClick={toggleMenu} type="image" src={burger} alt="Menu" />
    </div>
  );
}
