import './App.css';
import Icon from './assets/icon.svg';
import InputAnnotation from './components/InputAnnotation/InputAnnotation';
import InputGroup from './components/InputGroup/InputGroup';
import InputLabel from './components/InputLabel/InputLabel';
import InputText from './components/InputText/InputText';

function App() {
  return (
    <InputGroup fontFamily='sans-serif' paddingTop={'6rem'} paddingLeft={'6rem'}>
      <InputLabel title='Email' htmlFor='email' size='xl' icon={Icon} tooltipText='Enter your email' tooltipPosition='bottom' />
      <InputText 
        placeholder='Enter email'
        size='xl'
        rightIcon={Icon}
        leftIcon={Icon}
        lastIcon={Icon}
        isError
        id='email'
      />
      <InputAnnotation text='Please enter a valid email' size='xl' isError />
    </InputGroup>
  )
}

export default App
