import React from 'react';
import classNames from 'classnames';
import './button.css';
import  useWhyDidYouUpdate  from 'ahooks/lib/useWhyDidYouUpdate';
export const Button = React.memo(({ onClick, type, children, size = 's' }) => {
  useWhyDidYouUpdate('Button', {onClick, type, children, size})
  const btnClass = classNames({
      'btn': true,
      'btn--secondary': type === 'secondary',
      'btn--primary': type === 'primary',
      'btn--small': size === 's',
      'btn--medium': size === 'm',
    });
  
  return (
      <button
          className={ btnClass }
          onClick={ onClick }
      >
          { children }
      </button>
  )
});
