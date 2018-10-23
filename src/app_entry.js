import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Restaurant from './Restaurant'
import Gurunavi from './gurunavi'

import actions from './actions'

class Entry extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchOptions:{},
            restaurants:[]
        }
        this.search = this.search.bind(this)
    }

    async search(){
        const result = await actions.searchForRestaurants()
        this.setState({
            restaurants: result
        })
    }

    render(){
        let list;
        if(this.state.restaurants){
            list = this.state.restaurants.map((value, index) =>{
                return (
                    <Restaurant info={value} key={"res_" + index} />
                )
            })
        }
        return(
            <div>
                <Gurunavi />
                <Button onClick={this.search}>検索</Button>
                <Grid container spacing={24}>{list}</Grid>
            </div>
        )
    }
}

export default Entry