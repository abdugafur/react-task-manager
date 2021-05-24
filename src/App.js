import './App.css';
import TaskListContextProvider from './context/TaskListContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Header from './components/Header';

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header/>
          <div className="main">
            <TaskForm/>
            <TaskList/>
          </div>
        </div>  
      </div>
    </TaskListContextProvider>
  );
}

export default App;
