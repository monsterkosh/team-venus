import style from './Box.module.css';


const Box = ({title, data}) => {

    return (
            <div className={style.footer_boxes}>
                <h2>{title}</h2>
                <h4>{data}</h4>
            </div>
    )
}

export default Box;