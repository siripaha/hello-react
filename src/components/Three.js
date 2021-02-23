import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const Three = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [status, setStatus] = useState('Closed');

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  return (
    <div>
        <br></br>
        <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Profile  JYP 엔터테인먼트)</Button>
      <h6>Click to open: {status}</h6>
      <Collapse
        isOpen={collapse}
        onEntering={onEntering}
        onEntered={onEntered}
        onExiting={onExiting}
        onExited={onExited}
      >
        <Card>
          <CardBody>
          ถ้าพูดถึงค่ายเพลง เกาหลีที่มีศิลปินดังมากมายเป็นที่รู้จักทั่วเอเชีย เชื่อว่าหลายคนจะนึกถึง JYP Entertainment กันแน่นอน เพราะเป็นต้นสังกัดของศิลปินตัวพ่อตัวแม่หลายคน ไม่ว่าจะเป็น Rain ซุปตาร์ผู้จุดประกายวงการเคป๊อป Wonder Girls เกิร์ลกรุ๊ปน้องสาวแห่งชาติ 2PM บอยแบนด์สุดเท่ห์ ที่มีสมาชิกชาวไทยอย่าง นิชคุณ และล่าสุด GOT7 วงบอยแบนด์ที่มีศิลปินไทยอย่าง แบมแบม และอีกหลายศิลปินท่านมากมาย
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Three;