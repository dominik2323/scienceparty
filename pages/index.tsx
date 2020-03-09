import React, { ReactElement } from 'react';

import Img from '../components/Img';

interface Props {}

function Index({}: Props): ReactElement {
  return (
    <div className={`view`}>
      <Img src={`/icons/heroMotiv.svg`} />
    </div>
  );
}

export default Index;
