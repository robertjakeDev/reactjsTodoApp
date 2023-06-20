const App = () => {

  return (
    <>
      <div className="todo-wrapper">
        <div className="todos">
          <div className="todo-add">
            <form action="">
              <div className="form-group">
                <label htmlFor="tast">Task</label>
                <input type="text" placeholder="Enter tast here"/>
              </div>
              <button type="submit">Add</button>
            </form>
          </div>
          <div className="task-list">
            <div className="menu">
              <ul className="menu-list">
                <li className="menu-item active">All</li>
                <li className="menu-item">Pending</li>
                <li className="menu-item">Completed</li>
              </ul>
            </div>
            <div className="all-list">
              <ul className="list">
                <li className="item">
                  <div className="dispay">
                    <p><b>Task:</b> Eat breakfast</p>
                    <span><b>status:</b> pending</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;

