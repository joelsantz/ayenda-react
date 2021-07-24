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
`;

export default Button;