import React, { lazy, Suspense, useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import InfoTable from './components/InfoTable';
import SurveyChart from './components/SurveyChart';
import Footer from './components/Footer';
// import ImageModal from './components/ImageModal'

const LazyImageModal = lazy(() => import('./components/ImageModal'));

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleMouseEnter = () => {
    const component = import('./components/ImageModal');
  };

  useEffect(() => {
    const component = import('./components/ImageModal');

    const img = new Image();
    img.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800';

    const thumbnail1 = new Image();
    thumbnail1.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:150';

    const thumbnail2 = new Image();
    thumbnail2.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-03.jpg?interpolation=lanczos-none&resize=*:150';

    const thumbnail3 = new Image();
    thumbnail3.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-02.jpg?interpolation=lanczos-none&resize=*:150';

    const thumbnail4 = new Image();
    thumbnail4.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/20/part-2/20-08-2016-Golf-Women-02.jpg?interpolation=lanczos-none&resize=*:150';

    const thumbnail5 = new Image();
    thumbnail5.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/14/part-1/14-08-2016-Golf-Individual-Stroke-Play-Men-05.jpg?interpolation=lanczos-none&resize=*:150';

    const thumbnail6 = new Image();
    thumbnail6.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-02.jpg?interpolation=lanczos-none&resize=*:150';

    const thumbnail7 = new Image();
    thumbnail7.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-01.jpg?interpolation=lanczos-none&resize=*:150';

    const thumbnail8 = new Image();
    thumbnail8.src =
      'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-03.jpg?interpolation=lanczos-none&resize=*:150';
  }, []);

  return (
    <div className='App'>
      <Header />
      <InfoTable />
      <ButtonModal
        onClick={() => {
          setShowModal(true);
        }}
        onMouseEnter={handleMouseEnter}
      >
        올림픽 사진 보기
      </ButtonModal>
      <SurveyChart />
      <Footer />
      <Suspense fallback={null}>
        {showModal ? (
          <LazyImageModal
            closeModal={() => {
              setShowModal(false);
            }}
          />
        ) : null}
      </Suspense>
    </div>
  );
}

const ButtonModal = styled.button`
  border-radius: 30px;
  border: 1px solid #999;
  padding: 12px 30px;
  background: none;
  font-size: 1.1em;
  color: #555;
  outline: none;
  cursor: pointer;
`;

export default App;
