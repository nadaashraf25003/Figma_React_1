import "./Header.css";
import reactjsicon from '../assets/reactjs-icon.svg'
export function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <img src={reactjsicon} />
        </div>
        <div className="title">
          <p>ReactFacts</p>
        </div>
      </header>
    </>
  );
}
