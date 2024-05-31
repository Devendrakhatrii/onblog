import UseBlog from "@/hooks/UseBlog";

const Blogs = () => {
  const { data } = UseBlog({});
  return <div>{JSON.stringify(data)}</div>;
};

export default Blogs;
