import styled from 'styled-components';

export const Btn = styled.nav`
margin-top: 48px;
display: inline-block;
  align-items: center;
  margin-right: 24px;
  padding : 3px;
  border-radius: 80px;
  background-image: linear-gradient(65deg, #edb8ff, #6148ff);

  font-weight: 900;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Bouton = styled.div`
display: block;
  background: #0f0823;
  border-radius: 80px;
  padding: 26px 72px;
    font-size: 22px;
  line-height: 18px;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:after {
    color: #010606;
  }
`;