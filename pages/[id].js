import data from "./../public/data";
import { useRouter } from "next/router";

function showPost() {
  const router = useRouter();
  const { id } = router.query;

  const object = data.find((obj) => obj.id == id);

  return (
    <div className="d-flex justify-content-center">
      <div class=" justify-content-center m-4 w-50">
        <img src={object.imgURL} class="w-75 mx-auto d-block " />
        <div class="">
          <h5 class="text-center">{object.title}</h5>
          <p class="">{object.content}</p>
        </div>
      </div>
    </div>
  );
}

export default showPost;
