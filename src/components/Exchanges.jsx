import React from "react";
import millify from "millify";
import { Col, Collapse, Row, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Panel } = Collapse;
const { Text } = Typography;

const Exchanges = () => {
   // const { data, isFetching } = useGetExchangesQuery();
   // const exchangesList = data?.data?.exchanges;
   // if (isFetching) return <Loader />;

   return (
      <div style={{ height: "80vh" }}>
         <Typography.Title level={3}>Here is reserved</Typography.Title>
         {/* <Row>
            <Col span={6}>Exchanges</Col>
            <Col span={6}>24h Trade Volume</Col>
            <Col span={6}>Markets</Col>
            <Col span={6}>Change</Col>
         </Row>
         <Row>
            {exchangesList?.map((exchange) => (
               <Col span={24}>
                  <Collapse>
                     <Panel
                        key={exchange.uuid}
                        showArrow={false}
                        header={
                           <Row key={exchange.uuid}>
                              <Col span={6}>
                                 <Text>
                                    <strong>{exchange.rank}.</strong>
                                 </Text>
                                 <Avatar
                                    className="exchange-image"
                                    src={exchange.iconUrl}
                                 />
                                 <Text>
                                    <strong>{exchange.name}</strong>
                                 </Text>
                              </Col>
                              <Col span={6}>${millify(exchange.volume)}</Col>
                              <Col span={6}>
                                 {millify(exchange.numberOfMarkets)}
                              </Col>
                              <Col span={6}>
                                 {millify(exchange.marketShare)}%
                              </Col>
                           </Row>
                        }
                     >
                        {HTMLReactParser(exchange.description || "")}
                     </Panel>
                  </Collapse>
               </Col>
            ))}
         </Row> */}
      </div>
   );
};

export default Exchanges;
