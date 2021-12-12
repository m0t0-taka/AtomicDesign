import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "グール",
  image: "https://source.unsplash.com/BJaqPaH6AGQ",
  email: "12345@example.com",
  phone: "090-1234-5678",
  company: {
    name: "テスト会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
      <Router />
    // <div className="App">
    //   <PrimaryButton>テスト</PrimaryButton>
    //   <PrimaryButton>検索</PrimaryButton>
    //   <SearchInput />
    //   <UserCard user={user} />
    // </div>
  );
}
