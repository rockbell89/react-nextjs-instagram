import PostCard from "../components/PostCard";

export default function Home() {
  return [...Array(10)].map((v, i) => <PostCard key={i}></PostCard>);
}
