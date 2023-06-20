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
            <ul className="list">
              <li className="item">
                
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;

