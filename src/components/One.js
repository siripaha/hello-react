import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

const Example = (props) => {
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
      <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Profile SM 엔터테인먼트</Button>
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
          อี ซูมาน ผู้ก่อตั้งบริษัทเอสเอ็มเอนเตอร์เทนเมนต์ จบการศึกษาจากมหาวิทยาลัยโซล หลังจากที่จบการศึกษาแล้ว เขาก็ได้เริ่มทำการสำรวจกลุ่มวัยรุ่นผู้หญิง ว่าต้องการเห็นกลุ่มเพลงแบบไหน ด้วยเหตุนี้ ทำให้เค้าเริ่มก่อตั้งวงบอยแบนด์ ชื่อ H.O.T และกลุ่มเกิร์ลแบนด์ที่ชื่อว่า S.E.S ขึ้นมาเป็นวงแรก ซึ่งประสบความสำเร็จอย่างมาก ซึ่ง 2 วงนี้ได้ชื่อว่าเป็น วงดนตรีป๊อปชั้นนำของเกาหลี ในช่วงปี ค.ศ. 1990
          ปัจจุบัน เอสเอ็มเอนเตอร์เทนเมนต์ สามารถปั้นศิลปินรุ่นใหม่ออกมาอย่างมากมายและทุกวงก็ประสบความสำเร็จอย่างสูงทั้งในเกาหลี ระดับเอเชีย จนถึงทั่วโลก ยกตัวอย่างเช่น ซูเปอร์จูเนียร์ ที่มีคอนเสิร์ต World Tour เป็นของตัวเอง หรืออย่างที่ เกิลส์เจเนอเรชัน ได้เปิดตัวอย่างเป็นทางการที่ประเทศสหรัฐอเมริกา
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;