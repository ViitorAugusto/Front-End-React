import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    hasBorder?: boolean;
}

export function Avatar(props:AvatarProps) {
    return (
        <div >
            <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src} />
        </div>
    )
}