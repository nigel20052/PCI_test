interface HeaderProps {
  title: string;
  onResetFilters: () => void;
}

const Header = ({ title, onResetFilters }: HeaderProps) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <h2>{title}</h2>
    <button onClick={() => onResetFilters()} style={{ marginLeft: "15px" }}>
      Clear Filters and Sorters
    </button>
  </div>
);

export default Header;
