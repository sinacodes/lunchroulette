import { keyframes } from 'react-emotion'

const fadein = keyframes`
  0% {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeinSink = keyframes`
  0% {
    transform: translate3d(0,-50px,0);
    opacity: 0;
  }

  50% {
    transform: translate3d(0,0,0);
    opacizy: .9;
  }

  to {
    opacity: 1;
  }
`;

export { fadein, fadeinSink };