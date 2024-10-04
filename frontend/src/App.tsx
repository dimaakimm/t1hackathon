import './App.css'
import { MainTemplate } from './atomic/templates/MainTemplate'
// import { Provider } from 'react-redux'
// import { store } from './store'

function App() {

  return (
    // <Provider store={store}>
      <div className='body'>
        <MainTemplate/>
      </div>
    // </Provider>
  )
}

export default App
