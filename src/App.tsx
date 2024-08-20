import './App.css';
import Icon from './assets/icon.svg';
import InputAnnotation from './components/InputAnnotation/InputAnnotation';
import InputGroup from './components/InputGroup/InputGroup';
import InputLabel from './components/InputLabel/InputLabel';
import InputText from './components/InputText/InputText';

function App() {
  return (
    <InputGroup>
      <InputLabel title='Email' htmlFor='email' size='lg' icon={Icon} tooltipText='Enter your email' tooltipPosition='right' />
      <InputText 
        placeholder='Enter email'
        size='xl'
        rightIcon={Icon}
        leftIcon={Icon}
        lastIcon={Icon}
        disabled
        id='email'
      />
      <InputAnnotation text='Please enter a valid email' size='xl' isDisabled />
    </InputGroup>
  )
}

export default App
