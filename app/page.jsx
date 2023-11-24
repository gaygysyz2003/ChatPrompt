import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='black_gradient head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='green_gradient text-center'> ChatGPT-Powered Prompts</span>
    </h1>
    <p className='desc white_gradient text-center'>
      ChatPrompt is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;