const Home = (props) => {
  return (
    <div>
      <h2>
          POSTの一覧
        </h2>
        <div>
        {props.posts.map((post) =>
        <p className=" text-4xl font-bold  text-red-700">{post.id}. {post.title}</p>
        )}
        </div>
    </div>
  )
}

export const getStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;