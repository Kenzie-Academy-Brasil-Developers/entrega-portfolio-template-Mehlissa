import banner from "../../assets/banner-img.png";
import "../DivImage/style.css";

export const DivImage = () => {
    return (
        <div className="divImage">
            <img className="divImage__image" src={banner} alt="" />
        </div>
    );
};
