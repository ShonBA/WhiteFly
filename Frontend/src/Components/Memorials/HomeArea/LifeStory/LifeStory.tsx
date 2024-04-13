import { LifeStories } from "../../../../Models/LifeStories";
import { PersonProps } from "../../../../Models/PersonProps";
import "./LifeStory.scss";

export function LifeStory(props: PersonProps): JSX.Element {
    return (
        <div className="LifeStory">
            <div className="lifeStoryPara">
                <h2>סיפור חיי</h2>
                <p>{props.person?.lifeStories.story}</p>
                <button className="basic-btn">לסיפור המלא של ישראלה</button>
            </div>
            <div className="lifeStoryImage">
                <img src={props.person?.lifeStories.storyImageUrl} />
            </div>
        </div>
    );
}
