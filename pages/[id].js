import data from "./../public/data";
import { useRouter } from "next/router";

function showPost({object}) {
  const router = useRouter();
  const { id } = router.query;

  

  return (
    <div className="d-flex justify-content-center">
      <div class=" justify-content-center m-4 w-75 ">
        <img src={object.imgURL} class="w-50 mx-auto d-block " />
        <div class="">
          <h5 class="text-center">{object.title}</h5>
          <p class="">{object.content}</p>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({params}) {
  // Fetch data from external API
  const object = data.find((obj) => obj.id == params.id);

  // Pass data to the page via props
  return { props: { object } }
}

export default showPost;
