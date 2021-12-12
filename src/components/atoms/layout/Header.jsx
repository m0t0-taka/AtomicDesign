import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: green;
`;
