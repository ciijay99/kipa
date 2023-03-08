import React from 'react';
import { useSpring, animated } from '@react-spring/web'
import styled from 'styled-components';
import './publication.css';


const Circle = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #4CAF50;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: #fff;
`;

const LargeCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  background-color: #2196F3;
`;

const MediumCircle = styled(Circle)`
  width: 75px;
  height: 75px;
  background-color: #FFC107;
`;

const SmallCircle = styled(Circle)`
  width: 50px;
  height: 50px;
  background-color: #F44336;
`;


const Publication = () => {
  const titleSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 500 });
  const authorSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1000 });
  const dateSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 1500 });
  const abstractSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1}, delay: 2000 });
  const introSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 2500 });
  const methodologySpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 3000 });
  const resultsSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 3500 });
  const conclusionSpring = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, delay: 4000 });

  return (
    <div className="publication">
      <animated.h1 style={titleSpring} className="publication-title">
        Publication Title
      </animated.h1>
      <animated.p style={authorSpring} className="publication-author">
        Author Name
      </animated.p>
      <animated.p style={dateSpring} className="publication-date">
        Date Published
      </animated.p>
      <animated.p style={abstractSpring} className="publication-abstract">
        Abstract of publication
      </animated.p>
      <animated.h2 style={introSpring} className="publication-section-title">
        Introduction
        <div className="publication-section-content">
          <Circle>1</Circle>
          <Circle>2</Circle>
          <LargeCircle>A</LargeCircle>
          <MediumCircle>B</MediumCircle>
          <SmallCircle>C</SmallCircle>
        </div>
      </animated.h2>
      <animated.p style={introSpring} className="publication-section-content">
        Introduction content here...
      </animated.p>
      <animated.h2 style={methodologySpring} className="publication-section-title">
        Methodology
        <div className="publication-section-content">
          <Circle>1</Circle>
          <Circle>2</Circle>
          <Circle>3</Circle>
        </div>
      </animated.h2>
      <animated.p style={methodologySpring} className="publication-section-content">
        Methodology content here...
      </animated.p>
      <animated.h2 style={resultsSpring} className="publication-section-title">
        Results
      </animated.h2>
      <animated.p style={resultsSpring} className="publication-section-content">
      <div className="publication-section-content">
          <LargeCircle>X</LargeCircle>
          <MediumCircle>Y</MediumCircle>
          <SmallCircle>Z</SmallCircle>
        </div>
      </animated.p>
      <animated.h2 style={conclusionSpring} className="publication-section-title">
        Conclusion
      </animated.h2>
      <animated.p style={conclusionSpring} className="publication-section-content">
        Conclusion content here...
      </animated.p>
    </div>
  );
};

export default Publication;
