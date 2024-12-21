import Navigation from "../../components/ui/nav/Navigation";
import CreatePostComponent from "../../components/domain/post/CreatePost";

function CreatePost() {
  return (
    <>
      <Navigation $hide />
      <CreatePostComponent />
    </>
  );
}

export default CreatePost;
