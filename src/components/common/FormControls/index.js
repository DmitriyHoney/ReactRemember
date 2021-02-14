
import cls from './index.module.css'

export const Textarea = (props) => {
    let {input, meta, ...rest} = props;
    let hasError = meta.touched && !meta.valid;
    return (
        <div className={cls.form_control}>
            <div>
                <textarea {...rest} {...input}  className={hasError ? cls.form_control_error : ''}/>
            </div>
            {hasError && <div><span className={cls.error}>{meta.error}</span></div>}
        </div>
    )
}