import React ,{ useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
//import cats from './cats.json';
import { api } from './common/http-common';
import axios from 'axios';

const Cats = () => {
  const [cats, setCats] = useState(null);

  useEffect(() => {
    axios.get(`${api.url}/cats`).then((res:any) => {
      console.log(res.data)
      setCats(res.data);
    });
 }, []);
  if (!cats) {
    return (<div>There is no cats available now.</div>)
  } else
    return (
      <Row>
        {
          cats && cats.map(({id, title, alltext}) => (
            <Col span={8} key={id}>
              <Card title={title} style={{ width: 300 }}>
                <p>{alltext}</p>
                <p></p>
                <Link to={`/a/${id}`}>Details</Link>
              </Card>
            </Col>
          ))
        }
      </Row>
    )
}

export default Cats;

