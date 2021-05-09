
import './App.css';
import WithRenderProps from './components/WtihRenderProps';
import NewComponent from './components/WithHocSpeakers';

function App() {
  return (
    <div className="App">
  <WithRenderProps />
  <NewComponent name="Kill Bill" />
    </div>
  );
}

export default App;
