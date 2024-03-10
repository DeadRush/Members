import Layout from "./components/layout";
import Profile from "./components/profile";
import { data } from "./data/global";
import "./styles/style.scss";

const App = () => {
  return (
    <>
      <Layout>
        {data.map((profile) => {
          return (
            <Profile
              imgUrl={profile.imgUrl}
              name={profile.name}
              mail={profile.mail}
              rating={profile.rating}
            />
          );
        })}
      </Layout>
    </>
  );
};

export default App;
