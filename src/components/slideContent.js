import React from 'react';
import Carousel from "react-elastic-carousel";
import CardMedia from '@mui/material/CardMedia';
// import { display } from '@mui/system';

const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 1 },
      { width: 768, itemsToShow: 1 },
      { width: 1200, itemsToShow: 1 },
];

export default function slideContent() {
      return (
            <div style={{ margin: '0 20px 0 20px' }}>
                  <h1 style={{ fontSize: '20px', fontWeight: 500, lineHeight: '30px', color: '#007aff', marginLeft: '15px', display: 'inline-block' }}>#Hastag</h1>
                  <div className="App" style={{ marginBottom: '40px' }}>
                        <Carousel breakPoints={breakPoints}>
                              <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    image="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1628496260_h8FAIU.jpg"
                              />
                              <CardMedia
                                    component="img"
                                    alt="test uji kompetensi online"
                                    image="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1632291999_Hv2eP9.jpg"
                              />
                              <CardMedia
                                    component="img"
                                    alt="exhibition avoskin"
                                    image="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20210922/1632304900_OoLB8S.jpg"
                              />
                              <CardMedia
                                    component="img"
                                    alt="upgrade skill jo"
                                    image="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20210915/1631704307_VTEQhA.jpg"
                              />
                              <CardMedia
                                    component="img"
                                    alt="loket komisi"
                                    image="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1630997969_e5BMdF.jpg"
                              />
                              <CardMedia
                                    component="img"
                                    alt="program vaksin"
                                    image="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/temporary/20210708/1625735063_phwYrn.jpg"
                              />
                              <CardMedia
                                    component="img"
                                    alt="cashback linkaja"
                                    image="https://loket-production-sg.s3.ap-southeast-1.amazonaws.com/images/ss/1631068925_UmJVCC.jpg"
                              />
                        </Carousel>
                  </div>
            </div>
      )
}
