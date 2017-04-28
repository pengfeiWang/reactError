import React from 'react';
import { connect } from 'dva';

function App({children}) {
  return (
    <div>
      <div style={{background:'red', padding: '20px'}}>app root 这是Root 路由组件</div>
      {children}
    </div>
  );
}

App.propTypes = {
};

export default connect()(App);
