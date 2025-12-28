export interface HeaderItems {
  hamburgerClick : () => void
}

export function Header({ hamburgerClick }: HeaderItems) {
  return (
    <header className="flex">
      <img className="logoHeader" src="src/assets/Albums/theHeart/gunlogo2.gif" />
      <img onClick={hamburgerClick} className="hamburgerIcon" src="src/assets/icons/hamburger.png" />
    </header>
  );
}