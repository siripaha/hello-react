import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
//import Button from '@material-ui/core/Button';

const Example = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  

  return (
    <div className="mt-4">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            SM Entertainment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Bighit Entertainment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            JYP Entertainment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Pledis Entertainment
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Fantagio Entertainment
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
        <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>SM Entertainment</CardTitle>
                <CardText>SM Entertainment Co., Ltd. is a South Korean entertainment company founded in 1995 by Lee Soo-man. The company has developed and popularized numerous K-pop stars with huge global fandoms. </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Bighit Entertainment</CardTitle>
                <CardText>Big Hit Entertainment Co., Ltd. is a South Korean entertainment company established in 2005 by Bang Si-hyuk. It currently manages soloist Lee Hyun, and idol groups BTS and TXT—it is also formerly home to acts such as soloist Lim Jeong-hee, and groups 8Eight, 2AM, and GLAM.</CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="3">
        <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>JYP Entertainment</CardTitle>
                <CardText>JYP Entertainment Corporation is a South Korean multinational entertainment and record label conglomerate founded in 1997 by J. Y. Park.  </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="4">
        <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Pledis Entertainment</CardTitle>
                <CardText>Pledis Entertainment is a South Korean entertainment company founded by Han Sung-Soo in 2007. The label is home to actress Nana and K-pop artists After School, NU'EST and Seventeen. Its name originates from the pleiades, a star cluster in the constellation Taurus.  </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="5">
        <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Fantagio Entertainment</CardTitle>
                <CardText>Fantagio is a South Korean entertainment company. The company was founded in September 2008 as NOA Entertainment, before being renamed as Fantagio in June 2011. In 2012, the company had a reported operating income of KR₩14.1 billion with a net income of KR₩1.8 billion.  </CardText>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
}

export default Example;
