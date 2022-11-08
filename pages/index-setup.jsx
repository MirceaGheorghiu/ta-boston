export default function Home() {
  return (
    <div>
      hello boston <i className="fa-solid fa-house"></i>
      <img src="/images/logo.jpg" alt="Logo"></img>
      <div>
        <button className="button button-primary">Button Primary</button>
        <button className="button button-primary button-large">
          Button Primary Large
        </button>
        <a className="button button-primary">Button Primary</a>
        <a className="button button-primary button-large">Button Primary Large</a>
      </div>

      <div className="mt-5 pt-5">
        <span className="badge">new entry</span>
        <span className="badge badge-secondary">signed</span>
        <span className="badge badge-large">%</span>
        <span className="badge badge-large badge-secondary">%</span>
      </div>
    </div>
  );
}
