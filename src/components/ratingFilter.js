import React from 'react'
import Rating from './rating'
import {connect} from 'react-redux'

const RatingFilter = ({onChange = () => {}, count = 0}) => (
    <div className="rating-filter">
        <span className="rating-filter-text">Minimum rating</span>
        <Rating
            count={count}
            onChangeRating={(newRating) =>{
                onChange(newRating)
            }} />
      </div>
)

const mapStateToProps = state => {
    return {
        count: state.minRatingFilter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChange: (newRating) => {
            dispatch({
                type: 'SET_RATING_FILTER',
                rating: newRating
            })
        }
    }
}

const RatingFilterContainer = 
    connect(mapStateToProps, mapDispatchToProps)(RatingFilter)

export default RatingFilterContainer