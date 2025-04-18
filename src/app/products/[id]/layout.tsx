import React from 'react'

const ProductLayout = ({children,}: {children: React.ReactNode;}) => {
  return (
    <div>{children}
    <div>
        <h2>Featured Products Section</h2>
    </div>
    </div>
  )
}

export default ProductLayout