export default function Home(props) {
  return (
    <>
      {props.ssrWorking ? (
        <div style={{display:'flex',justifyContent:'center',flexDirection:"column",flex:0,textAlign:"center"}}>
          <img src="/assets/success.jpg" height="500" />
          <h2> Deployment Successful of Nextjs Application with SSR on Firebase. </h2>
        </div>
      ) : (
        <h2>SSR not working</h2>
      )}
    </>
  );
}

export async function getServerSideProps() {
  return { props: { ssrWorking: true } };
}
