'use client'

import React from 'react'
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Link,
} from '@react-pdf/renderer'
import PDFTable from './PdfTable'

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 48,
    paddingHorizontal: 48,
    boxSizing: 'border-box',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  imgg: {
    height: 40,
    width: 40,
    overflow: 'hidden',
  },
})

const tableData = [
  {
    id: 1,
    name: 'Yasmine Kihn',
    gender: 'female',
    phone: '8354650298',
  },
  {
    id: 2,
    name: 'Moriah Pollich',
    gender: 'female',
    phone: '7854389123',
  },
  {
    id: 3,
    name: 'Bernie Goodwin',
    gender: 'male',
    phone: '9756893422',
  },
]

const Card = () => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.heading}>My Enhanced PDF</Text>
          <PDFTable
            tableHeaders={[
              { title: 'Name', value: 'name' },
              { title: 'Gender', value: 'gender' },
              { title: 'Phone', value: 'phone' },
            ]}
            data={tableData}
            heading="Employee Details"
          />
          <Text style={styles.heading}>Also please note:</Text>
          <Image
            style={styles.imgg}
            src={
              'https://fastly.picsum.photos/id/1050/200/300.jpg?hmac=mMZp1DAD5EpHCZh-YBwfvrg5w327V3DoJQ8CmRAKF70'
            }
          />
          <Text>
            Shipping to one or multiple locations will be estimated by our team
            when after you let us you know the shipping addresses. You will be
            billed according to the price practiced at the time of shipping.
            Shipping to one or multiple locations will be estimated by our team
            when after you let us you know the shipping addresses. You will be
            billed according to the price practiced at the time of shipping.
            Shipping to one or multiple locations will be estimated by our team
            when after you let us you know the shipping addresses. You will be
            billed according to the price practiced at the time of shipping.
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export default Card
