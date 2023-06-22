import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//import "./style.scss";

const CircleRating = ({ rating,classes }) => {
    return (
        <div className={classes|| ""}>
            <CircularProgressbar
                value={rating}
                maxValue={10}
                text={rating}
                styles={buildStyles({
                    textColor:"white",
                    textSize:"30px",
                    pathColor:
                        rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                })}
                className="bg-black font-bold rounded-full text-white "
            />
        </div>
    );
};

export default CircleRating;