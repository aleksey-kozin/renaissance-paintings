import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Heading from '../Heading/Heading'
import Main from '../Main/Main'
import { Provider } from 'react-redux'
import store from '../../utils/redux/store'
import './App.css'

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="App">
          <Heading />
          <Main />
          <Footer />
        </div>
      </Provider>
    </>
  )
}

export default App
