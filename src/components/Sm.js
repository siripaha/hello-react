import React from 'react';
import { Badge } from 'reactstrap';

const Example = (props) => {
  return (
    <div>
      <Badge href="https://www.smtown.com/" color="primary">SM Entertainment</Badge>
      <Badge href="https://www.bighitcorp.com/eng/" color="secondary">Bighit Entertainment</Badge>
      <Badge href="https://m.jype.com/" color="success">JYP Entertainment</Badge>
      <Badge href="http://www.pledis.co.kr/" color="danger">Pledis Entertainment</Badge>
      <Badge href="http://www.fantagio.kr/" color="warning">Fantagio Entertainment</Badge>
    </div>

  
  );
}

export default Example;

 