import Navigation from "../../components/ui/nav/Navigation";
import CreatePost from "../../components/domain/post/CreatePost";

function PostPage() {
  return (
    <>
      <Navigation $hide />
      <CreatePost />
    </>
  );
}

export default PostPage;
