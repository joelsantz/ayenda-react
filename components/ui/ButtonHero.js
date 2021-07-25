import styled from "@emotion/styled";

const Button = styled.a`
   text-align: center;
   width: 15rem;
   font-weight: 700;
   text-transform: uppercase;
   font-family: 'Oswald', sans-serif;
   color: white;
   margin: 1rem 2rem;
   padding: .8rem 2rem;
   background-color: var(--black);

   &::last-of-type {
       margin-right: 0;
   }

   &:hover {
       cursor: pointer;
       box-shadow: 8px 8px 0px -1px rgba(232,232,232,1);
       transition: 0.2s;

   }
`;

export default Button;