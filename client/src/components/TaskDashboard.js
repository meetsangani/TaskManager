import React , {useState} from 'react';
import { Search } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function TaskDashboard() { // Accept startTime and endTime as props
  const [searchQuery, setSearchQuery] = useState('');
  const [tasks, setTasks] = useState([
    {
      date: '24 - Dec - 2024',
      startTime: '09:10:51',
      endTime: '04:57:12',
      items: [
        'Create the chat application',
        'Create the login and signup screen',
        'Create the database and user\'s login in the database and successfully login'
      ],
      references: ['Chat application Refer', 'Chat application Privacy refer']
    },
    {
      date: '27 - Dec - 2024',
      startTime: '09:10:51',
      endTime: '04:57:12',
      items: [
        'Create the chat application',
        'Create the login and signup screen',
        'Create the database and user\'s login in the database and successfully login'
      ],
      references: ['Chat application Refer', 'Chat application Privacy refer']
    }
  ]);

  const [attendance, setAttendance] = useState([
    { date: '25-12-2024', inTime: 'Christmas', outTime: 'Christmas' },
    { date: '24-12-2024', inTime: '7:45', outTime: '15:20' },
    { date: '23-12-2024', inTime: '8:00', outTime: '14:14' },
    { date: '22-12-2024', inTime: '7:35', outTime: '12:30' },
    { date: '21-12-2024', inTime: '8:20', outTime: '15:55' },
    { date: '20-12-2024', inTime: '7:55', outTime: '15:20' },
    { date: '19-12-2024', inTime: '8:30', outTime: '15:20' }
  ]);

  const presentCount = attendance.filter(record => record.inTime !== 'Christmas').length;
  const absentCount = attendance.filter(record => record.inTime === 'Christmas').length;

  const data = [
    { name: 'Present', value: presentCount },
    { name: 'Absent', value: absentCount },
  ];

  const handleAddTask = () => {
    const newTask = {
      date: 'New Task Date',
      startTime: 'New Start Time',
      endTime: 'New End Time',
      items: ['New Task Item 1', 'New Task Item 2'],
      references: ['New Reference 1']
    };
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const handleAddAttendance = (inTime, outTime) => {
    const newAttendance = {
      date: new Date().toLocaleDateString(), // Current date
      inTime: inTime,
      outTime: outTime
    };
    setAttendance([...attendance, newAttendance]);
  };

  const filteredTasks = tasks.filter(task => 
    task.items.some(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-light">
      <header className="bg-white shadow-sm">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Task Dashboard</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target ="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Project</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="input-group">
              <span className="input-group-text"><Search /></span>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <button className="btn btn-primary w-100" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>
      </div>

      <div className="container mt-4">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="mb-4">Tasks</h2>
            {filteredTasks.map((task, index) => (
              <div key={index} className="card mb-3">
                <div className="card-body">
                  <h5 className="card-title">{task.date}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Start Time: {task.startTime} | End Time: {task.endTime}</h6>
                  <ul className="list-group list-group-flush">
                    {task.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="list-group-item">{item}</li>
                    ))}
                  </ul>
                  <div className="mt-3">
                    {task.references.map((ref, refIndex) => (
                      <span key={refIndex} className="badge bg-secondary me-1">{ref}</span>
                    ))}
                  </div>
                  <button className="btn btn-danger mt-2" onClick={() => handleDeleteTask(index)}>
                    Delete Task
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="col-lg-6">
            <h2 className="mb-4">My Attendance</h2>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Attendance Records</h5>
                <table className="table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>In Time</th>
                      <th>Out Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.map((record, index) => (
                      <tr key={index}>
                        <td>{record.date}</td>
                        <td>
                          <span className={`badge ${record.inTime ? 'bg-success' : 'bg-danger'}`}>
                            {record.inTime || 'Not Recorded'}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${record.outTime ? 'bg-success' : 'bg-danger'}`}>
                            {record.outTime || 'Not Recorded'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-4">
        <p className="text-muted">CopyRight© 2021-2025 Candice Prentice</p>
      </footer>
    </div>
  );
}