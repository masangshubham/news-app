import Card from "@/components/Card";
import data from "../public/data";


function createCard(data){
  return <Card 
  key={data.id}
  id={data.id}
  title={data.title}
  content={data.content}
  imgURL={data.imgURL} 
  />
}

export default function Home() {
  return (
    <>
      <div class="row row-cols-1 row-cols-md-2 g-4 m-4 p-2">
        
        {data.map(createCard)}
        
        {/* <Card
          title={data[0].title}
          content={data[0].content}
          imgURL={data[0].imgURL} 
        />
        <Card
          title={data[1].title}
          content={data[1].content}
          imgURL={data[1].imgURL} 
        />
        <Card
          title={data[2].title}
          content={data[2].content}
          imgURL={data[2].imgURL} 
        />
        <Card
          title={data[3].title}
          content={data[3].content}
          imgURL={data[3].imgURL} 
        />
        <Card
          title={data[4].title}
          content={data[4].content}
          imgURL={data[4].imgURL} 
        /> */}
      </div>
    </>
  );
}
