export interface HeaderItems {
  hamburgerClick : () => void
}

export function Header({ hamburgerClick }: HeaderItems) {
  return (
    <header className="flex">
      <img className="logoHeader" src="/images/gunlogo2.gif" />
      <img onClick={hamburgerClick} className="hamburgerIcon" src="/icons/hamburger.png" />
    </header>
  );
}