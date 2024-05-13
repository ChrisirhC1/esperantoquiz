
import './gameMode.css';



import React from 'react';
import { Container } from 'react-bootstrap';
import { animated, useTransition } from 'react-spring';
import Bouton from '../bouton/Bouton';

const GameMode = () => {
    const transitions = useTransition(true, {
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)' },
        enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
        leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    });

    return (
        <>
            {transitions((style, item) =>
                item && (
                    <animated.div style={style}>
                        <Container className="vh-100 d-flex flex-column justify-content-start align-items-center">
                            <h1 className="mt-5">Game Mode</h1>
                            <div className="btn-container d-flex flex-row align-items-center justify-content-center flex-grow-1 mb-5">
                                <Bouton ia={true} />
                                <Bouton ia={false} />
                            </div>
                        </Container>
                    </animated.div>
                )
            )}
        </>
    );
};

export default GameMode;
