//import './App.css'
import 'antd/dist/reset.css';
import { Card, Button, DatePicker } from 'antd';
import Hello from './components/Hello';
import Goodbye from './components/Goodbye';

let counter = 0;

const onChange : DatePicker ['onChange'] = (date, datestring) => {
  console.log(date, datestring);
}

const onClick = (event: any) => {
  console.log(counter++)
}

export default function App() {
  return (
    <div>
      <Hello name="Banana"/>
      <Card title="Default card" style={{ width: 300 }}>
        <p>Content 1</p>
        <p>Content 2</p>
        <p>Content 3</p>
      </Card>
      <br />
      <Button type="primary" onClick = {onClick}>Button</Button>
      <Button type="primary" danger>Button</Button>
      <br />
      <DatePicker onChange = {onChange} />
      <Goodbye name="Dummy" />
    </div>
  )
}
