'use client'
import Card from '@components/dummy/Card'
import React from 'react'
import { PDFViewer, pdf } from '@react-pdf/renderer'
import jsPDF from 'jspdf'
import { saveAs } from 'file-saver'
const index = () => {
  const handleDownload = async () => {
    const blob = await pdf(<Card />).toBlob()
    saveAs(blob, 'untitled.pdf')
  }

  return (
    <>
      <button onClick={handleDownload}>Download</button>
      <div id="invoice-container">
        <PDFViewer height={1000} width={2000}>
          <Card />
        </PDFViewer>
      </div>
    </>
  )
}

export default index
