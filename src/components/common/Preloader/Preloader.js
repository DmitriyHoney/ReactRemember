import cls from './Preloader.module.css';

const Preloader = (props) => {
    return <div className={cls.ldsLoader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader;