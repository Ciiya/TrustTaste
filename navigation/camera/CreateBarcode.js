import { useState } from "react"
import supabaseClient from '../../../config/supabaseClient'


const CreateBarcode = () => {
	const [barcode, setBarcode] = useState('')
	const [scanError, setScanError] = useState(null)

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (!barcode) {
			setScanError('Please enter a barcode')
			return
		}

		SetScanError(null) //clearing previous errors

		const { data, error } = await supabase
		.from('products').insert([{ barcode }])

		if (error) {
			setScanError('Error saving barcode: ' + error.message)
		} else {
			setBarcode('')
			alert('Barcode saved successfully!')
		}
	}

	return (
		<div className="page create">
			<form onSubmit={handleSubmit}>
				<label htmlFor="barcode">Method:</label>
				<textarea
					id="barcode"
					value={barcode}
					onChange={(e) => setBarcode(e.target.value)}
					/>

					{scanError && <p className="error">{scanError}</p>}
					<button type="submit">Save Barcode</button>
			</form>
		</div>
	)
}

export default CreateBarcode