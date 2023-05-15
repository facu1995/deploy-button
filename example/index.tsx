import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from '../src';

const App = () => {
  return (
    <div>
      <Button
        borderRadius={30}
        hover
        label="Button"
        onClick={() => {}}
        type="primary"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
