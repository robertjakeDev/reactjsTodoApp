import { useRef } from "react"
import { useState } from "react"

const App = () => {

  const [task, setTask] = useState([{
    task: 'Eat',
    status: 0
  }])

  const newTask = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('asd')
    const fd = {
      task: newTask.value,
      status: 0
    }
    let updatedTask = task
    updatedTask.push(fd)
    setTask(updatedTask)
  }

  return (
    <>
      <div className="todo-wrapper">
        <div className="todos">
          <div className="todo-add">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="tast">Task</label>
                <input ref={newTask} type="text" placeholder="Enter tast here" />
              </div>
              <button onClick={handleSubmit} type="submit">Add</button>
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
                {
                  task?.map((d,i)=>{
                    return (
                      <li key={i} className="item">
                        <div className="dispay">
                          <p><b>Task:</b> {d.task}</p>
                          <span><b>status:</b> {d.status==1?"complete":"pending"}</span>
                        </div>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default App;

