import { FC, useEffect } from 'react';
import { useLocation } from 'react-router';

type Props = {
  children: React.ReactNode;
};

const ScrollToTop: FC<Props> = (props) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
};

export default ScrollToTop;
