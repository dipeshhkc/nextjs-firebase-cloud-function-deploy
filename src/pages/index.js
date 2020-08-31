export default function Home(props) {
  return (
    <>
      <h1> Hello ji </h1>
      <h2> {props.name}</h2>
    </>
  );
}

export async function getServerSideProps() {
  return { props: { name: 'dipesh' } };
}
