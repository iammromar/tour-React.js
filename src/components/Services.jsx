import React from "react";
import styled from "styled-components";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";

export default function Services() {
  const data = [
    {
      icon: service1,
      title: "1,000+ Tur Paket",
      subTitle:
        "Dünyanın istənilən istiqamətinə uçuşlar mövcuddur.",
    },
    {
      icon: service2,
      title: "Hər Mövsümə Uyğun",
      subTitle:
        "İstirahət və biznes",
    },
    {
      icon: service3,
      title: "98% Məmnuniyyət",
      subTitle:
        " Xidmətimiz keyfiyyətimizdir.",
    },
    // {
    //   icon: service4,
    //   title: "Lorem ipsum dolor",
    //   subTitle:
    //     "Lorem ipsum dolor.",
    // },
  ];
  return (
    <Section id="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </Section>
  );
}

const Section = styled.section`
  padding: 5rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  h3,p {
    text-align: center;
  }
  .service {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: aliceblue;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .icon {
      img {
        height: 2.4rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
