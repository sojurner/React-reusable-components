import React from 'react';
import LystButton from '../../../components/LystButton/LystButton';

const btnOptions = {
  color: ['primary', 'default', 'inherit', 'secondary'],
  disabled: [false, true],
  disableRipple: [false, true],
  disableFocusRipple: [false, true],
  size: ['medium', 'small', 'large'],
  variant: ['text', 'outlined', 'contained']
};

const ExampleLystButton = () => {
  const [txt, setTxt] = React.useState('Hello');
  const [disabled, setDisabled] = React.useState(false);
  const [disableRipple, setDisableRipple] = React.useState(false);
  const [disableFocusRipple, setDisableFocusRipple] = React.useState(false);

  const [color, setColor] = React.useState('primary');
  const [size, setSize] = React.useState('medium');
  const [variant, setVariant] = React.useState('text');

  const updateValue = event => {
    const { id, value } = event.target;
    switch (id) {
      case 'color':
        setColor(value);
        break;
      case 'disabled':
        setDisabled(value);
        break;
      case 'disableRipple':
        setDisableRipple(value);
        break;
      case 'disableFocusRipple':
        setDisableFocusRipple(value);
        break;
      case 'size':
        setSize(value);
        break;
      case 'variant':
        setVariant(value);
        break;
      default:
        return;
    }
  };

  return (
    <>
      <LystButton
        btnProps={{
          color,
          disabled,
          size,
          variant,
          disableRipple,
          disableFocusRipple,
          txt
        }}
      />
      <form
        style={{
          margin: '1rem 0',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {Object.keys(btnOptions).map(key => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                margin: '1rem 2rem'
              }}
            >
              <label style={{ textTransform: 'capitalize' }} for={`${key}`}>
                {key}
              </label>
              <select onChange={updateValue} id={`${key}`}>
                {btnOptions[key].map((listItem, index) => {
                  return (
                    <option
                      selected={!index}
                      value={listItem}
                    >{`${listItem}`}</option>
                  );
                })}
              </select>
            </div>
          );
        })}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            margin: '1rem 1rem'
          }}
        >
          <label style={{ textTransform: 'capitalize' }} for={'labelInput'}>
            Button Title
          </label>
          <input
            id="buttonInput"
            placeholder="enter to change button txt"
            type="text"
            value={txt}
            style={{ height: 'max-content' }}
            onChange={event => setTxt(event.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default ExampleLystButton;
