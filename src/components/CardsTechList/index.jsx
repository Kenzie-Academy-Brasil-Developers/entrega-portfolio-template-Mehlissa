import "../CardsTechList/style.css";

export const CardsTechList = ({ name, image }) => {
    return (
        <li className="listTech">
            <img src={image} alt="" />
            <span className="spanName">{name}</span>
        </li>
    );
};
