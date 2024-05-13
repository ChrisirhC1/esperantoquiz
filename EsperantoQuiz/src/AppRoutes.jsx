// AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Accueil from './components/pages/Accueil';
import GameMode from './components/pages/GameMode';
import Game from './components/pages/Game';

import { animated, useTransition } from 'react-spring';


const AppRoutes = () => {
    const transitions = useTransition(true, {
      from: { opacity: 0, transform: 'translate3d(-100%, 0, 0)' },
      enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
      leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    });
  
    return (
      <>
        {transitions((style, item) => 
          item && (
            <animated.div style={style}>
              <Routes>
                <Route path="/esperantoquiz" element={<Accueil />} />
                <Route path="/game-mode" element={<GameMode />} />
                <Route path="/game" element={<Game />} />
                <Route path="*" element={<Accueil />} />
              </Routes>
            </animated.div>
          )
        )}
      </>
    );
  };
  

export default AppRoutes;




