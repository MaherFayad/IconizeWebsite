import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";

type LogoProps = {
    className?: string;
    dark?: boolean;
};

const Logo = ({ className, dark }: LogoProps) => (
    <Link className={cn(className, styles.logo)} href="/">
        <svg
            width="142"
            height="42"
            fill={dark ? "#88444C" : "#fff"}
            stroke={dark ? "#88444C" : "#fff"}
            viewBox="0 0 142 42"
        >
            <path d="M2.9082 30.3887C2.9082 30.6142 3.09091 30.7968 3.31628 30.7968C3.33886 30.7968 3.36102 30.795 3.38261 30.7915H5.55826C5.78364 30.7915 5.96634 30.6088 5.96634 30.3834V12.3945C5.96634 12.1691 5.78364 11.9864 5.55826 11.9864H3.31628C3.09091 11.9864 2.9082 12.1691 2.9082 12.3945V30.3834V30.3887Z"  stroke-width="0.816154" stroke-linejoin="round"/>
            <path d="M16.9464 30.1358C18.2904 30.8639 19.7941 31.2515 21.4611 31.3055V31.3174H21.8691C23.6628 31.3174 25.212 30.9808 26.4934 30.2863C27.7531 29.6036 28.7632 28.7131 29.5128 27.602C30.2501 26.5092 30.7445 25.353 30.9779 24.135L31.0539 23.7382L30.6579 23.6582L28.4539 23.2129L28.0406 23.1294L27.9706 23.5452C27.7356 24.9425 27.1257 26.1138 26.1432 27.077C25.1989 28.0028 23.7954 28.4947 21.8691 28.4947C20.6175 28.4947 19.5035 28.2097 18.5268 27.6431C17.5471 27.0749 16.7702 26.2815 16.193 25.2439C15.621 24.216 15.3292 22.9888 15.3292 21.5366V21.2416C15.3292 19.7894 15.621 18.5622 16.193 17.5342C16.7702 16.4966 17.5471 15.7032 18.5268 15.135C19.5036 14.5684 20.6123 14.2834 21.8691 14.2834C23.1418 14.2834 24.1758 14.516 25.0006 14.9589C25.8366 15.4107 26.4804 16.007 26.9382 16.7415C27.4047 17.4901 27.6995 18.3193 27.8167 19.2231L27.873 19.6573L28.3022 19.5707L30.5063 19.1254L30.8864 19.0486L30.8291 18.665C30.6463 17.4429 30.1898 16.2886 29.479 15.193L29.4784 15.1922C28.7554 14.0837 27.7546 13.1862 26.4934 12.5026C25.2124 11.8083 23.6905 11.4715 21.8691 11.4715C20.039 11.4715 18.3946 11.8601 16.9467 12.6476C15.492 13.4358 14.3489 14.5637 13.5161 16.023C12.6787 17.4903 12.2656 19.2205 12.2656 21.2039V21.5742C12.2656 23.5372 12.6791 25.2612 13.5154 26.7379C14.348 28.208 15.4965 29.3471 16.9464 30.1358Z"  stroke-width="0.816154"/>
            <path d="M40.7947 30.0952C42.2515 30.9126 43.9368 31.312 45.8363 31.312C47.7411 31.312 49.4262 30.9131 50.878 30.0952C52.3253 29.2799 53.4526 28.1407 54.2476 26.678C55.0433 25.2141 55.4344 23.5248 55.4344 21.617V21.1717C55.4344 19.264 55.0433 17.5746 54.2476 16.1108C53.4526 14.648 52.3253 13.5088 50.878 12.6935C49.4214 11.8761 47.7414 11.4768 45.8363 11.4768C43.9317 11.4768 42.2466 11.8756 40.7947 12.6935C39.3474 13.5088 38.2201 14.648 37.425 16.1108C36.6295 17.5746 36.2383 19.264 36.2383 21.1717V21.617C36.2383 23.5248 36.6295 25.2141 37.425 26.678C38.2201 28.1407 39.3474 29.2799 40.7947 30.0952ZM50.6165 26.6084C49.4614 27.8572 47.8882 28.4947 45.8363 28.4947C43.8128 28.4947 42.2383 27.8579 41.0713 26.6071C39.8993 25.3509 39.2964 23.6767 39.2964 21.5365V21.2414C39.2964 19.1013 39.8993 17.4271 41.0713 16.1709C42.2387 14.9196 43.7919 14.2834 45.8363 14.2834C47.883 14.2834 49.4615 14.9209 50.6165 16.1696C51.7783 17.4257 52.3763 19.1003 52.3763 21.2414V21.5365C52.3763 23.6776 51.7783 25.3523 50.6165 26.6084Z"  stroke-width="0.816154"/>
            <path d="M88.4707 30.3887C88.4707 30.6142 88.6535 30.7968 88.8788 30.7968C88.9008 30.7968 88.9237 30.795 88.9449 30.7915H91.1208C91.346 30.7915 91.5288 30.6088 91.5288 30.3834V12.3945C91.5288 12.1691 91.346 11.9864 91.1208 11.9864H88.8788C88.6535 11.9864 88.4707 12.1691 88.4707 12.3945V30.3834V30.3887Z"  stroke-width="0.816154" stroke-linejoin="round"/>
            <path d="M98.918 30.3887V30.7968H99.326H114.121H114.529V30.3887V28.3876V27.9795H114.121H102.174L114.116 15.7158L114.231 15.597V15.4311V12.3945V11.9864H113.823H99.6998H99.2918V12.3945V14.3956V14.8037H99.6998H110.938L99.033 27.068L98.918 27.1867V27.3522V30.3887Z"  stroke-width="0.816154"/>
            <path d="M137.977 22.288H138.386V21.88V20.6943C138.386 18.8088 138 17.1645 137.212 15.772C136.428 14.3876 135.349 13.3176 133.969 12.577C132.597 11.8386 131.079 11.4715 129.275 11.4715C127.469 11.4715 125.849 11.8723 124.42 12.6896C122.995 13.5054 121.881 14.6439 121.072 16.1023C120.258 17.5671 119.861 19.2577 119.861 21.1664V21.6117C119.861 23.5 120.259 25.1844 121.071 26.6586C121.881 28.1295 123.013 29.2795 124.461 30.0953C125.81 30.8552 127.369 31.2531 129.127 31.306V31.3228H129.535C131.193 31.3228 132.591 31.0651 133.709 30.5257C134.805 29.9996 135.703 29.3225 136.404 28.4964L136.406 28.4951C137.08 27.6941 137.622 26.8693 138.013 26.0147L138.186 25.6384L137.807 25.4714L135.787 24.5807L135.416 24.4171L135.25 24.7871C134.777 25.8399 134.096 26.7278 133.214 27.4496C132.374 28.137 131.168 28.5054 129.529 28.5054C127.628 28.5054 126.085 27.9251 124.859 26.7804C123.732 25.7285 123.077 24.2465 122.936 22.288H137.977ZM135.265 19.5405H123.029C123.335 17.8984 124.008 16.6506 125.022 15.7596C126.135 14.7872 127.519 14.2888 129.275 14.2888C131.034 14.2888 132.442 14.7888 133.525 15.7569C134.511 16.6391 135.105 17.8886 135.265 19.5405Z"  stroke-width="0.816154"/>
            <path d="M79.2778 30.3618V22.0514C79.2778 22.0514 79.554 18.0813 75.3354 14.5189C73.9707 13.3655 72.4543 12.786 71.0301 12.5339C68.3007 12.0457 65.5009 12.8558 63.3672 14.6048L63.443 25.8874L66.1399 27.3252L67.797 25.41L69.3188 23.1513C69.3188 23.1513 69.8549 23.795 69.8711 25.8928L69.8549 30.3618" fillOpacity="0%" stroke-width="3.26462" stroke-miterlimit="10"/>
        </svg>
    </Link>
);

export default Logo;
