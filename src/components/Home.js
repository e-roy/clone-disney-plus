import React, { useEffect } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import firebase from "../firebase";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
// import { selectUserName } from "../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  // const userName = useSelector(selectUserName);

  useEffect(() => {
    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];
    firebase
      .firestore()
      .collection("movies")
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          switch (doc.data().type) {
            case "recommend":
              recommends = [...recommends, { id: doc.id, ...doc.data() }];
              break;

            case "new":
              newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
              break;

            case "original":
              originals = [...originals, { id: doc.id, ...doc.data() }];
              break;

            case "trending":
              trending = [...trending, { id: doc.id, ...doc.data() }];
              break;
            default:
              break;
          }
        });

        dispatch(
          setMovies({
            recommend: recommends,
            newDisney: newDisneys,
            original: originals,
            trending: trending,
          })
        );
      });
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
