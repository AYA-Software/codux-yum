import classNames from 'classnames';
import styles from './card.module.scss';
import Shikun20220402125829TpVWebp from '../../assets/shikun20220402_125829_tp_v.webp';

export interface CardProps {
    imageUrl?: string;
    children?: React.ReactNode;
    className?: string;
}

export const Card = ({ imageUrl = Shikun20220402125829TpVWebp, children = "Super Cat", className }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={imageUrl}
                alt=""
                className={classNames(styles.image, styles.div1)}
            />
            <div className={styles.content}>{children}</div>
        </div>
    );
};
