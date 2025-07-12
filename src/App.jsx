import React, { useState } from 'react'

const unitFactors = {
	meter: 1,
	kilometer: 1000,
	centimeter: 0.01,
	mile: 1609.34
}

export default function UnitConverter() {
	const [fromUnit, setFromUnit] = useState('meter')
	const [toUnit, setToUnit] = useState('kilometer')
	const [fromValue, setFromValue] = useState('')
	const [convertedValue, setConvertedValue] = useState(null)

	const handleConvert = () => {
		if (fromValue === '' || isNaN(fromValue)) return

		const valueInMeters = parseFloat(fromValue) * unitFactors[fromUnit]
		const result = valueInMeters / unitFactors[toUnit]
		setConvertedValue(result.toFixed(3))
	}

	return (
		<div className="flex flex-col items-center space-y-4 mt-10">
			<div className="flex space-x-4">
				<select
					id="fromUnit"
					value={fromUnit}
					onChange={(e) => setFromUnit(e.target.value)}
					className="p-2 border rounded"
				>
					<option value="meter">Meter</option>
					<option value="kilometer">Kilometer</option>
					<option value="centimeter">Centimeter</option>
					<option value="mile">Mile</option>
				</select>

				<select
					id="toUnit"
					value={toUnit}
					onChange={(e) => setToUnit(e.target.value)}
					className="p-2 border rounded"
				>
					<option value="meter">Meter</option>
					<option value="kilometer">Kilometer</option>
					<option value="centimeter">Centimeter</option>
					<option value="mile">Mile</option>
				</select>
			</div>

			<input
				type="number"
				id="fromValue"
				value={fromValue}
				onChange={(e) => setFromValue(e.target.value)}
				placeholder="Enter value"
				className="p-2 border rounded w-64"
			/>

			<button
				id="convert"
				onClick={handleConvert}
				className="bg-blue-500 text-white px-4 py-2 rounded"
			>
				Convert
			</button>

			<div id="outputValue" className="text-xl font-semibold mt-4">
				{convertedValue !== null &&
					`${fromValue} ${fromUnit} = ${convertedValue} ${toUnit}`}
			</div>
		</div>
	)
}
