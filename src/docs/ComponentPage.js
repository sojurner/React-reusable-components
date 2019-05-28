import React from 'react';
import PropTypes from 'prop-types';
import Example from './Example';
import Props from './Props';

const ComponentPage = ({ component }) => {
  const [display, setDisplay] = React.useState(true);
  const { name, description, props, examples } = component;
  console.log(component);
  return (
    <div className="componentpage">
      <div
        className={display ? 'header header-open' : 'header header-closed'}
        onClick={() => setDisplay(!display)}
      >
        <h2>{name}</h2>
        <span>{!display ? '+' : '-'}</span>
      </div>
      <p>{description}</p>
      {display && (
        <>
          <h3>Example{examples.length > 1 && 's'}</h3>
          <div>
            {examples.length > 0
              ? examples.map(example => (
                  <Example
                    key={example.code}
                    example={example}
                    componentName={name}
                  />
                ))
              : 'No examples exist.'}

            <h3>Props</h3>
            {props ? (
              <Props props={props} />
            ) : (
              'This component accepts no props.'
            )}
          </div>
        </>
      )}
    </div>
  );
};

ComponentPage.propTypes = {
  component: PropTypes.object.isRequired
};

export default ComponentPage;
