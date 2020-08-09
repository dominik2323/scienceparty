import React, { ReactElement } from 'react';

import Img from '../components/Img';

interface Props {}

function Index({}: Props): ReactElement {
  return (
    <div className={`view`}>
      <Img src={`/icons/heroMotiv.svg`} />
      <a className={`fcb`} href='https://www.facebook.com/SciencePartyBrno/'>
        Pokračovat na Facebook
      </a>
    </div>
  );
}

export default Index;
