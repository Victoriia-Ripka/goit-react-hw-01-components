import React from 'react'
import PropTypes from 'prop-types'
import { Section, Title, List, Item, Type, Data } from './Statistics.styled'

export const Statistics = ( {title, stats} ) =>{
    return (
        <Section>
            <Title>{title}</Title>
            <List>
                {stats.map( stat => (
                    <Item key={stat.id}>
                        <Type>{stat.label}</Type>
                        <Data>{stat.percentage} %</Data>
                    </Item>
                ))} 
            </List>
        </Section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ),    
}