import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: "グール",
    image: "https://source.unsplash.com/BJaqPaH6AGQ",
    email: "12345@example.com",
    phone: "090-1234-5678",
    company: {
      name: "テスト会社"
    },
    website: "https://google.com"
  };
});
export const Users = () => {
  return (
    <SContainer>
      <h2>Usersページです</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
