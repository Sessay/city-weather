import React from 'react';
// import styled from 'styled-components';
import { Button } from 'antd';
import Image404 from './images/404.jpg';

// const Container = styled.div`
//   width: 100%;
//   height: 100%;
//   padding: 30px;
//   background: url(${Image404}) center center / 100% 100% no-repeat;
// `;

const NoMatch = ({ history }) => {
  const handleBackHomePage = () => {
    history.replace('/');
  };

  return (
    <div style={{ width: '100%', height: '100%', padding: '30px', background: `url(${Image404}) center center / 100% 100% no-repeat` }}>
      <Button htmlType="button" type="primary" onClick={handleBackHomePage}>
        {'点击返回首页'}
      </Button>
    </div>
  );
};

NoMatch.propTypes = {};
NoMatch.defaultProps = {};

export default NoMatch;
