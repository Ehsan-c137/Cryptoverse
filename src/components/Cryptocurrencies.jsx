import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";

import { useGetCryptosQuery } from "../services/cryptoApi";

const Cryptocurrencies = ({ simplified }) => {
   const count = simplified ? 10 : 100;
   const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
   const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);
   const [searchTerm, setSearchTerm] = useState("");

   useEffect(() => {
      const filteredData = cryptosList?.data?.coins.filter((coin) =>
         coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setCryptos(filteredData);
   }, [cryptosList, searchTerm]);
   console.log(cryptosList);
   if (isFetching) return <Loader />;

   return (
      <>
         {!simplified && (
            <div className="search-crypto">
               <Input
                  placeholder="Search Cryptocurrency"
                  onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
         )}
         <Row gutters={[32, 32]} className="crypto-card-container">
            {cryptos?.map((item) => (
               <Col
                  xs={24}
                  sm={12}
                  lg={6}
                  className="crypto-card"
                  key={item.uuid}
               >
                  <Link to={`/crypto/${item.uuid}`}>
                     <Card
                        title={`${item.rank}. ${item.name}`}
                        extra={
                           <img
                              className="crypto-image"
                              src={item.iconUrl}
                              alt="coin"
                           />
                        }
                        hoverable
                     >
                        <p>Price: {millify(item?.price)}</p>
                        <p>Market Cap: {millify(item?.marketCap)}</p>
                        <p>Daily Change: {millify(item?.change)}%</p>
                     </Card>
                  </Link>
               </Col>
            ))}
         </Row>
      </>
   );
};

export default Cryptocurrencies;
