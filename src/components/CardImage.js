import PropTypes from "prop-types";

const CardImage = (props) => <img src={props.imgUrl} className="card-img-top" alt="..."/>

CardImage.propTypes = {
    imgUrl: PropTypes.string.isRequired
}

export default CardImage;
