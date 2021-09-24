import React from 'react'
import data from './data'

const ParagraphInput = ({ paragraphNumber, setParagraphNumber, generateParagraphs }) => {
    return (
        <form className="main-form" onSubmit={generateParagraphs}>
            <label className="main-form_generator">
                <input type="number" name="paragraphs-number" min="0" max={data.length} value={paragraphNumber} onChange={(e) => setParagraphNumber(e.target.value)} />
            </label>
            <input type="submit" value="Generate" />
        </form>
    )
}

export default ParagraphInput
