import cn from "classnames";
import styles from "./Mockup.module.sass";
import '../../node_modules/html5-device-mockups/dist/device-mockups.min.css';
import { MacbookPro } from 'react-device-mockups';

const Mockup = () => {
    return (
        <div className={cn("h7",styles.mockupwrapper)}>
            <MacbookPro
                width={'70vw'}
                orientation='landscape'
                color='black'
                screenProps={{ style: { pointerEvents: 'auto' } }}
            >
            <iframe
                title="showcase"
                src="https://maherfayad.com"
                style={{
                    width: "142%",
                    height: "142%",
                    margin: 0,
                    overflow: 'auto', // Add this CSS property to enable scrolling
                    zIndex: 1000,
                    transform: 'scale(0.7)',
                    transformOrigin: '0 0'
                }}
                allow="fullscreen" // Add 'allow' attribute to enable interaction
                ></iframe>
            </MacbookPro></div>

    );
};

export default Mockup;

