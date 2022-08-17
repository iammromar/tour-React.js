import React from "react";
import styled from "styled-components";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
export default function Footer() {
  return (
    <FooterContainer>
      <span className="copyright">Copyright &copy; 2022 Self Digital Agency. Bütün hüquqlar qorunur.</span>
      <ul className="links">
        <li>
          <a href="#hero">Ana Səhifə</a>
        </li>
        <li>
          <a href="#services">Biz kimik?</a>
        </li>
        <li>
          <a href="#foreigntours">Turlar</a>
        </li>
        <li>
          <a href="#testimonials">Rəylər</a>
        </li>
        <li>
            <a href="#contact">Əlaqə</a>
          </li>
      </ul>
      <ul className="social__links">
        <li>
          <BsFacebook />
        </li>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <BsLinkedin />
        </li>
      </ul>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-evenly;
  background-color: #d0d8ff;
  border-radius: 0.5rem;
  padding: 2.5rem;

  ul {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    li {
      a {
        text-decoration: none;
        color: black;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
      svg {
        font-size: 1.3rem;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #302ce9;
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1024px) {
    flex-direction: column;
    gap: 2rem;
    ul {
      flex-direction: column;
    }
    .social__links {
      flex-direction: row;
      justify-content: center;
    }
    .copyright {
      text-align:center;
    }
    .links {
      display: none;
    }
  }
`;
