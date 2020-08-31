export default function Register(props) {
    return (
      <>
        <h1> Hello Register ji </h1>
        <h2> {props.name}</h2>
      </>
    );
  }
  
  export async function getServerSideProps() {
    return { props: { name: 'Register' } };
  }
  