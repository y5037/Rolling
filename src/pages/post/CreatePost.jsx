import Navigation from "../../components/ui/nav/Navigation";
import CreatePostComponent from "../../components/domain/post/CreatePost";

function Post() {
  return (
    <>
      <Navigation $hide />
      <CreatePostComponent />
    </>
  );
}

export default Post;
