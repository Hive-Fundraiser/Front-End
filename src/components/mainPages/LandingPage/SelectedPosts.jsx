import styles from "./SelectedPost.module.css";

import post_0 from "./../../../images/LandingPage/SelectedPosts/post_0.svg";
import post_1 from "./../../../images/LandingPage/SelectedPosts/post_1.svg";
import post_2 from "./../../../images/LandingPage/SelectedPosts/post_2.svg";
import post_3 from "./../../../images/LandingPage/SelectedPosts/post_3.svg";
import post_4 from "./../../../images/LandingPage/SelectedPosts/post_4.svg";
import Post from "./../../shared/Post";
import { useContext } from "react";
import { CharityContext } from "../../../context/CharityProvider";

const SelectedPosts = ( props ) => {
    const charity = useContext ( CharityContext );
    const firstFiveData = charity.slice(0, 5);

    const set = ( posts , start , end , width ) => {
        return posts
            .slice ( start , end )
            .map ( ( post ) => (
                <Post
                    key={ post.id }
                    dataChar={ post }

                    width={ width }
                />
            ) );
    };
    const setPosts = ( posts ) => {
        return (
            <div className={ styles.parent }>
                <div className={ styles.type1_right }>{ set ( posts , 0 , 4 , 50 ) }</div>
                <div className={ styles.type1_left }>{ set ( posts , 4 , 5 , 100 ) }</div>
            </div>
        );
    };
    const handlePosts = ( posts ) => {
        let result = [];
        if ( posts.length - 5 < 0 ) {
            return [
                <div className={ styles.parent }>
                    { setPosts ( posts , 0 , posts.length , 25 ) }
                </div> ,
            ];
        }
        for ( let i = 0 ; i < posts.length ; i = i + 5 ) {
            if ( i + 5 <= posts.length ) {
                result.push ( setPosts ( posts.slice ( i , i + 5 ) ) );
            } else {
                result.push (
                    <div className={ styles.parent }>
                        { setPosts ( posts , i , posts.length , 25 ) }
                    </div>
                );
                return result;
            }
        }
        return result;
    };
    return handlePosts ( firstFiveData );
};

export default SelectedPosts;
