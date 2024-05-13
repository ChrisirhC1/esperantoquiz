import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { animated, useTransition } from 'react-spring';
import Select from '../select/Select';
import Rocket from '../fusee/Rocket'

const Accueil = () => {
    const [textePrank] = useState("Je rigole, en fait je m'en fous");

    const transitions = useTransition(true, {
        from: { opacity: 0, transform: 'translate3d(100%, 0, 0)', },
        enter: { opacity: 1, transform: 'translate3d(0%, 0, 0)' ,},
        leave: { opacity: 0, transform: 'translate3d(-50%, 0, 0)' },
    });

    return (
        <>
            {transitions((style, item) =>
                item && (
                    <animated.div style={style}>
                        <Container className="vh-100 d-flex flex-column justify-content-center align-items-center">
                            <div className="flex-grow-1"></div>
                            <h1 className="mt-auto mb-4">Esperanto Quiz</h1>
                            <Rocket />
                            <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1 mb-5">
                                <Select textePrank={textePrank} />
                                <Link to="/game-mode">
                                    <Button variant="primary">Commencer</Button>
                                </Link>
                            </div>
                        </Container>
                    </animated.div>
                )
            )}
        </>
    );
};

export default Accueil;
