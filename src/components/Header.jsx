import "./Header.css";
export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/src/assets/reactjs-icon.svg" />
        </div>
        <div className="title">
          <p>ReactFacts</p>
        </div>
      </header>
    </>
  );
}
