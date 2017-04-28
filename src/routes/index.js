import React from 'react';
import { connect } from 'dva';

function IndexPage() {
  return (
    <div>
      <p className="">路由</p>
      index route
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
