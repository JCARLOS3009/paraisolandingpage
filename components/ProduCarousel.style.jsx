import styled from 'styled-components'

export const ProduCarousel = styled.ProduCarousel`
@import url("https://fonts.googleapis.com/css?family=Lora:400,400i,700");
body {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 100vh;
  margin: 0;
  background: #white;
}

.carousel {
  position: relative;
  display: flex;
}
.carousel .slides {
  position: relative;
  top: -4em;
  left: 10em;
}
.carousel .slides img {
  position: absolute;
  width: 450px;
  height: 450px;
  opacity: 0;
  z-index: 9999;
}
.carousel .slides img.active {
  opacity: 1;
}
.carousel .overlays {
  position: relative;
  width: 36em;
  height: 18em;
}
.carousel .overlays .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bar-color);
  transform-origin: left;
}
.carousel .nav-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0 0 0 6em;
  list-style-type: none;
}
.carousel .nav-links .nav-link {
  font-size: 2rem;
  font-family: Montserrat bold, sans-serif;
  line-height: 2;
  text-decoration: none;
  color: #7f8c8d;
  transition: 0.3s;
}
.carousel .nav-links .nav-link:hover {
  color: #1c1e1f;
}
.carousel .nav-links .nav-link.active {
  color: black;
  pointer-events: none;
}`