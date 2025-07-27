import React from 'react';
import { Dropdown } from 'react-bootstrap';
import useLanguage from '../../hooks/useLanguage';

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  return (
    <Dropdown>
      <Dropdown.Toggle variant='outline-light' size='sm'>
        {currentLanguage.toUpperCase()}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => changeLanguage('en')}>English</Dropdown.Item>
        <Dropdown.Item onClick={() => changeLanguage('si')}>?????</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageSelector;
