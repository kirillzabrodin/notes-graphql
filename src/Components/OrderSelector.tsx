import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import React, { useState } from 'react'
import { CustomOrderType } from '../types'

const OrderSelector = () => {
	const [orderType, setOrderType] = useState<CustomOrderType>("Descending")

	const handleOrderingChange = (
		_event: React.MouseEvent<HTMLElement>,
		newAlignment: CustomOrderType,
	  ) => {
			switch(newAlignment) {
				case "Ascending":
					setOrderType("Ascending")
					break;
				case "Most Recent":
					setOrderType("Most Recent")
					break;
				default:
					setOrderType("Descending")
				
			console.log(orderType)
			}
	  };
  
	return (
    <ToggleButtonGroup
			color="primary"
			value={orderType}
			exclusive
			onChange={handleOrderingChange}
			aria-label="Platform"
		>
			<ToggleButton value="Descending">Descending</ToggleButton>
			<ToggleButton value="Ascending">Ascending</ToggleButton>
			<ToggleButton value="Most Recent">Most Recent</ToggleButton>
    </ToggleButtonGroup>
    )
}



export default OrderSelector