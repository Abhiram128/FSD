import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const { user } = useAuthContext();

  return (
    <div className="home container mx-auto py-20 grid grid-cols-3 gap-10">
      <div className="home-left col-span-2">
        {user ? (
          <h2 className="text-4xl font-medium text-sky-400 mb-10">
            Logged in successfully
          </h2>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
