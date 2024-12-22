import Navigation from "../../components/ui/nav/Navigation";
import CreatePost from "../../components/domain/post/CreatePost";

function Post() {
  return (
    <>
      <Navigation $hide />
      <CreatePost />
    </>
  );
}

export default Post;
