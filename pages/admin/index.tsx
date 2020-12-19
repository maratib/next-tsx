// export interface HomeProps {
//   name: string;
// }

// const Home: React.FC<HomeProps> = (props) => {
//   return (
//     <div>
//       <h1>Welcome {props.name}</h1>
//     </div>
//   );
// }

// Home.defaultProps = {
//   name: "Hello"
// }
// export default Home;
type HomeProps = {
  name: string;
};

const Home = (props: HomeProps) => (
  <div>
    <h1>This from {props.name}</h1>
  </div>
);

Home.defaultProps = {
  name: 'Maratib'
}
export default Home;