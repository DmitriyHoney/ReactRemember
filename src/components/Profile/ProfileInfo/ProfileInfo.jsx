import cls from './ProfileInfo.module.css'
import defaultImage from '../../../assets/defaultUser.jpg';
import ProfileStatus from "../ProfileStatus/ProfileStatusFunc";

const ProfileInfo = (props) => {
    if (!props.profile) return false;
    let { lookingForAJob, lookingForAJobDescription, fullName, photos } = props.profile;
    return (
        <div className={cls.content}>
            main content
            <div className={cls.image}>
                <img src={photos.large || defaultImage} alt="main-avatar" />
            </div>

            <ProfileStatus updateStatus={props.updateStatus} status={props.status} />

            <div>{fullName}</div>
            <div>Статус занятости: {lookingForAJob ? 'готов получить задание и работать' : 'Уже работаю'}</div>
            <div>Сообщение работадателю: {lookingForAJobDescription}</div>

            <div>
                {/* <img src="https://vuzopedia.ru/storage/app/uploads/public/5f4/cf9/9eb/5f4cf99eb1595666607312.jpg" alt="avatar"/> */}
                ava + descr
            </div>
        </div>
    )
}

export default ProfileInfo