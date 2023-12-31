import './styles/App.css';
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  const [text, setText] = useState('');
  const [radio, setRadio] = useState('');
  const [checkbox, setCheckbox] = useState([false, false, false]);

  useEffect(() => {
    console.log('checkbox', checkbox)
  })

  const updateCheckBox = (e) => {
    console.log(e.target.value);
    let temp = checkbox;
    temp[e.target.value - 1] = !checkbox[e.target.value - 1];
    setCheckbox([...temp]);
  }

  return (
    <div className="container">
      <h1>React Controlled Forms</h1>
      <div className="row">
        <div className="col md-6">
          <h3>Controlled Form</h3>
          <form>
            <label htmlFor="text" className="form-label">
              Example textarea
            </label>
            <textarea className="form-control" id="text" rows="3" name="text" onChange={(e) => setText(e.target.value)}></textarea>
            <label className="form-check-label" htmlFor="radio">
              Default radio
            </label>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="1" id="radio1" name="radio" checked={radio === '1'} onClick={() => setRadio('1')} />
              <label className="form-check-label" htmlFor="radio1">
                Radio 1
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="2" id="radio2" name="radio" checked={radio === '2'} onClick={() => setRadio('2')} />
              <label className="form-check-label" htmlFor="radio2">
                Radio 2
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" value="3" id="radio3" name="radio" checked={radio === '3'} onClick={() => setRadio('3')} />
              <label className="form-check-label" htmlFor="radio3">
                Radio 3
              </label>
            </div>
            <label className="form-check-label" htmlFor="checkbox">
              Default checkbox
            </label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="1" id="checkbox1" name="checkbox" checked={checkbox[0]} onClick={updateCheckBox}/>
              <label className="form-check-label" htmlFor="checkbox1">
                Checkbox 1
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="2" id="checkbox2" name="checkbox" checked={checkbox[1]} onClick={updateCheckBox}/>
              <label className="form-check-label" htmlFor="checkbox2">
                Checkbox 2
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="3" id="checkbox3" name="checkbox" checked={checkbox[2]} onClick={updateCheckBox} />
              <label className="form-check-label" htmlFor="checkbox3">
                Checkbox 3
              </label>
            </div>
          </form>
        </div>
        <div className="col md-6">
          <h3>Form Output</h3>
          <p className="text">
            <span className="title">Text : {text}</span>
          </p>
          <p className="radio">
            <span className="title">Radio : {radio}</span>
          </p>
          <p className="checkbox">
            <span className="title">Checkbox : </span> {`[ `}
            {
              checkbox && checkbox.map((item, index) => (
                <>
                {item && <span>{index + 1}, </span>}
                </>
              ))
            }
            {`]`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
