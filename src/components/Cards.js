// import PropTypes from "prop-types"
import React from "react"
import Card  from "./Card"

const Cards = props => {
  const { nodes } = props

  return (
    <div className="container overflow-hidden">
      <div className="flex flex-wrap -mx-3 xl:-mx-6">
        {nodes.map((item, i) => (
          <div
            className="w-full sm:w-1/2 xl:w-1/3 px-3 xl:px-6 py-6"
            key={`card_${item.node.fields.slug}`}
          >
            <Card
              {...item.node}
              navigation={{
                current: i,
                items: nodes.map(item => `/${item.node.fields.slug}`),
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

// Cards.propTypes = {
//   nodes: PropTypes.arrayOf(PropTypes.object).isRequired,
// }

export default Cards