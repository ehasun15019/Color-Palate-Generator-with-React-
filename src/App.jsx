import React, { useState } from 'react'

export default function App() {
	const [currentPalette, setCurrentPalette] = useState([])
	const [savedPalettes, setSavedPalettes] = useState([])

	// Function to generate a single random hex color
	const generateColor = () => {
		return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`
	}

	// Generate new palette (5 colors)
	const handleGenerate = () => {
		const newPalette = Array.from({ length: 5 }, generateColor)
		setCurrentPalette(newPalette)
	}

	// Save current palette
	const handleSave = () => {
		if (currentPalette.length === 5) {
			setSavedPalettes([...savedPalettes, currentPalette])
		}
	}

	// Delete saved palette by index
	const handleDelete = (index) => {
		const updated = savedPalettes.filter((_, i) => i !== index)
		setSavedPalettes(updated)
	}

	return (
		<div className="cg h-auto min-h-[600px] flex flex-col justify-center items-center p-4 space-y-6">
			<button className="bg-amber-300 p-4 rounded" id="generate" onClick={handleGenerate}>
				Generate
			</button>

			<div id="current-palette" className="flex space-x-2">
				{currentPalette.map((color, index) => (
					<div
						key={index}
						className="color-block w-20 h-20 flex items-center justify-center text-white font-bold rounded"
						style={{ backgroundColor: color }}
					>
						{color}
					</div>
				))}
			</div>

			{currentPalette.length === 5 && (
				<button id="save" className="bg-green-400 px-4 py-2 rounded" onClick={handleSave}>
					Save
				</button>
			)}

			<div id="saved-palettes" className="flex flex-col space-y-4 w-full items-center">
				{savedPalettes.map((palette, index) => (
					<div key={index} className="flex items-center space-x-2">
						{palette.map((color, i) => (
							<div
								key={i}
								className="color-block w-16 h-16 rounded"
								style={{ backgroundColor: color }}
							></div>
						))}
						<button
							className="delete-palette-button bg-red-500 text-white px-2 py-1 rounded"
							onClick={() => handleDelete(index)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
