import React from 'react';
import { useSpring, to, animated, config } from '@react-spring/web';
import { scale, dist } from 'vec-la';
import { useDrag } from 'react-use-gesture';
import styles from './Rocket.module.css'; // Assurez-vous d'avoir le bon chemin vers votre fichier CSS

const Rocket = () => {
    const [{ pos }, api] = useSpring(() => ({ pos: [0, 0] }));
    const [{ angle }, angleApi] = useSpring(() => ({
        angle: 0,
        config: config.wobbly,
    }));

    const bind = useDrag(
        ({ xy, previous, down, movement: pos, velocity, direction }) => {
            api.start({
                pos,
                immediate: down,
                config: { velocity: scale(direction, velocity), decay: true },
            });

            if (dist(xy, previous) > 10 || !down)
                angleApi.start({ angle: Math.atan2(direction[0], -direction[1]) });
        },
        { initial: () => pos.get() }
    );

    return (
        <animated.div
            className={styles.rocket}
            {...bind()}
            style={{
                transform: to(
                    [pos, angle],
                    ([x, y], a) => `translate3d(${x}px,${y}px,0) rotate(${a}rad)`
                ),
            }}
        />
    );
};

export default Rocket;
