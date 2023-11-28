import React, {Component} from 'react';
// import YoutubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Pruduct/Product';
import LifeCycleComp from '../LifeCycleClop/LifecycleComp';

class Home extends Component {
    render(){
        return (
            <div>
               {/* <p>Youtobe Component</p>
                <hr/>
                <YoutubeComp 
                time="7.12" 
                title="Tutorial React js -bagian 1"
                desc="2x di tonton. 2 hari yang lalu"/>
                <YoutubeComp 
                time="8.02"
                title="Tutorial React js -bagian 2"
                desc="55x di tonton. 3 hari yang lalu"/>
                <YoutubeComp 
                time="5.04"
                title="Tutorial React js -bagian 3"
                desc="200x di tonton. 6 hari yang lalu"/>
                <YoutubeComp 
                time="4.12"
                title="Tutorial React js -bagian 4"
                desc="13x di tonton. 5 hari yang lalu"/>
        <YoutubeComp/>*/}
                {/* <p>Counter</p>
                <hr />
                <Product /> */}
                <p>LifeCycle Component</p>
                <hr />
                 <LifeCycleComp />

            </div>
        )
    }
}

export default Home;