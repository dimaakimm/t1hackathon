import './App.css'
import { MainTemplate } from './atomic/templates/MainTemplate'
import { ChakraProvider } from '@chakra-ui/react';
// import { Provider } from 'react-redux'
// import { store } from './store'

function App() {

  return (
    <ChakraProvider>
    {/* // <Provider store={store}> */}
      <div className='body'>
        <MainTemplate/>
      </div>
    </ChakraProvider>
    // </Provider>
  )
}

export default App
