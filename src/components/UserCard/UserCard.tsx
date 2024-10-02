import { UserCardProps } from './UserCard.types';
import styles from '../../styles/UserCard.module.scss';
import EmailIcon from '../../assets/icons/EmailIcon';
import PhoneIcon from '../../assets/icons/PhoneIcon';

const UserCard = ({ user }: UserCardProps) => (
  <div className={styles.userCard}>

    <div className={styles.avatar} />
    <h2 className={styles.name}>{user?.name}</h2>
    <p className={styles.username}>{user?.username}</p>

    <div className={styles.address}>
      <h3 className={styles.title}>Address:</h3>
      <div className={styles.street}>
        <span>Street: </span>
        <p>{user?.address?.street}</p>
      </div>
      <div className={styles.city}>
        <span>City: </span>
        <p>{user?.address?.city}</p>
      </div>
      <div className={styles.zipcode}>
        <span>Zip: </span>
        <p>{user?.address?.zipcode}</p>
      </div>
    </div>

    <div className={styles.social}>
      <a href={`mailto:${user?.email}`}><EmailIcon className={styles.emailIcon} /></a>
      <a href={`tel:${user?.phone}`}><PhoneIcon className={styles.phoneIcon}  /></a>
    </div>

    <div className={styles.company}>
      <p>{user.company.name}</p>
      <a href={`https://${user?.website}`} target="_blank" rel="noreferrer">{user?.website}</a>
    </div>
  </div>
);

export default UserCard;
