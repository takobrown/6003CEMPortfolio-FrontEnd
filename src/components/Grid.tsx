import 'antd/dist/reset.css';
import { Row, Col } from 'antd';
import CatsList from './CatsList'

const Grid = () => {
  return (
    <>
      <Row gutter={[16,16]}>
        <Col span={8}>
          <CatsList />
        </Col>
        <Col span={8}>
          <CatsList />
        </Col>
        <Col span={8}>
          <CatsList />
        </Col>
      </Row>
    </>
  )
}

export default Grid;