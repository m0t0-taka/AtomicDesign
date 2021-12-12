import styled from "styled-components"

export const UserIconWithName = (props) => {
  const { image, name } = props;
  return (
    <SIcon>
      <img height={160} src={image} alt={name} />
      <p>{name}</p>
    </SIcon>
  );
};

const SIcon = styled.div`
  text-align: left;
`