import PropTypes from "prop-types";
import CardImage from "./CardImage";

const Card = (props) => {
    return (
        <div className="card align-self-start" style={props.style}>
            {props.imgUrl && <CardImage imgUrl={props.imgUrl}/>}
            <div className="card-body">{props.children}</div>
        </div>
    )
}

Card.propTypes = {
    style: PropTypes.object,
    imgUrl: PropTypes.string,
    children: PropTypes.node
}

export default Card;
