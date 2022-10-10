import { GetServerSideProps } from "next";
import PostCard from "../components/PostCard";
import { wrapper } from "../store";
import { increase } from "../store/modules/counter";

export default function Home() {
  return [...Array(10)].map((v, i) => <PostCard key={i}></PostCard>);
}

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async ({ req, res }) => {
    await store.dispatch(increase());
    return {
      props: {},
    };
  });
