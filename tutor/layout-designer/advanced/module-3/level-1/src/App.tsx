import { useContext } from 'react';
import './App.css'
import { UserContext } from './Context'

function App() {
  const { name, email, role, handleLogin } = useContext(UserContext);
  
  return (
    <div>
      <ul>
        <li>User: {name}</li>
        <li>Email: {email}</li>
        <li>Role: {role}</li>
      </ul>
      <button onClick={() => handleLogin('John Doe', 'cTb6M@example.com', 'admin')}>Update</button>
    </div>
  )
}

export default App
