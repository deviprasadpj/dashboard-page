import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import Content from './components/Content'

const App = () => {
  return (
    <div className='grid-container'>
      <Header />
      <div className='sidebar-container'>
        <Sidebar />
        <Content />
       </div>
    </div>
  )
}

export default App;
