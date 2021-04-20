import React, {Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import banner1 from './Images/banner1.png'
import banner2 from './Images/banner2.png'
import banner3 from './Images/banner3.png'
import './Banner.css'
const items = [
    {
      src: banner1,
      header: <p>"Your time is limited, so don't waste it living someone else's life" <br />- Thời gian của bạn luôn có hạn, vì vậy đừng lãng phí nó để sống cuộc đời khác</p>,
    },
    {
      src: banner2,
      header: <p>"Wisdom is not a product from school, but a lifelong learning process."<br />- Trí tuệ không phải là một sản phẩm từ trường học, mà là một quá trình học tập suốt đời.</p>,
    },
    {
      src: banner3,
      header: <p>"What we learn with pleasure we will never forget." <br />- Những gì chúng ta học được với sự thoải mái chúng ta sẽ không bao giờ quên.</p>,
    }
  ];

  const Banner = () => <UncontrolledCarousel items={items} />;

export default Banner;

