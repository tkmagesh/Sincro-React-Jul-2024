const BugItem = ({ bug, toggle, remove }) => {
  return (
    <li>
      <div>
        <span
          className={`bugname ${bug.isClosed ? "closed" : ""}`}
          onClick={() => toggle(bug)}
        >
          {bug.name}
        </span>
        <span>[project id]</span>
      </div>
      <div className="datetime">[{bug.createdAt.toString()}]</div>
      <button onClick={() => remove(bug)}>Remove</button>
    </li>
  );
};

export default BugItem;