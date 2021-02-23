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
        <Button color="info" onClick={toggle} style={{ marginBottom: '1rem' }}>Profile  BH 엔터테인먼트</Button>
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
          ปัจจุบัน Big Hit ได้มีศิลปินในความดูแลเพิ่มขึ้นจากเดิมแต่ก็ยังไม่มากนัก ไม่ว่าจะเป็นศิลปินเดียวอย่าง “Lee Hyun” และวงบอยแบนด์น้องใหม่อย่าง “TXT“ ที่มีสมาชิกด้วยกันทั้งหมด 5 คน แต่สิ่งที่ทำให้ Big Hit ได้ก้าวขึ้นมาเป็นอันดับหนึ่งของบริษัทบันเทิงในเกาหลีใต้ด้วยมูลค่าและเงินลงทุนในบริษัทที่สูงที่สุดนั้น เกิดจากมูลค่าของบริษัทที่เพิ่มขึ้นในช่วงหลายปีที่ผ่าน เนื่องจากความนิยมของหนุ่ม ๆ BTS ที่โด่งดังไปทั่วโลก สิ่งหนึ่งที่สามารถพิสูจน์ความดังของหนุ่ม ๆ BTS ได้คือพวกเขาสามารถคว้าอันดับ 1 บน Billboard ชาร์ตของอเมริกามาแล้วหลายต่อหลายครั้งภายในระยะเวลาไม่กี่ปี ซึ่งถือเป็นการประสบความสำเร็จที่ยากมากสำหรับศิลปินเกาหลี (K-POP) ในการตีตลาดเพลงสากลได้ขนาดนี้
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Example;