import styled from "styled-components";
import { ImgSlider } from "./ImgSlider";
import NewDesny from "./disney";
import Origin from "./Original";
import Reckmn from "./Recomends";
import Trending from "./Trending";
import Viewers from "./Viewers";  // Corrected import here

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/Movieslice";
import { selectUserName } from "../features/user/userSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  
  useEffect(() => {
    const recommends = [];
    const newDisneys = [];
    const originals = [];
    const trending = [];

    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends.push({ id: doc.id, ...doc.data() });
            break;
          case "new":
            newDisneys.push({ id: doc.id, ...doc.data() });
            break;
          case "original":
            originals.push({ id: doc.id, ...doc.data() });
            break;
          case "trending":
            trending.push({ id: doc.id, ...doc.data() });
            break;
         
        }
    

      dispatch(
        setMovies({
          recommend: [...recommends],  // Spread operator creates a new array
          newDisney: [...newDisneys],  // Spread operator creates a new array
          original: [...originals],    // Spread operator creates a new array
          trending: [...trending],     // Spread operator creates a new array
        })
      );
    });
  });
  }, [userName, dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Reckmn />
      <NewDesny />
      <Origin />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
