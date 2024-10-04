import './App.css'
import { MainTemplate } from './atomic/templates/MainTemplate'
// import { Provider } from 'react-redux'
// import { store } from './store'

function App() {

  return (
    // <Provider store={store}>
      <div className='body bg-green-700 h-screen w-screen'>
        <MainTemplate/>
      </div>
    // </Provider>
  )
}

export default App
