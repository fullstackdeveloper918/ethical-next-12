'use client'

import React from 'react'
import EthicalLogo from '../../assets/headerPics/ethical_logo.svg'

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
    height: '40%',
    width: '40%',
    overflow: 'hidden',
  },
  main_pdfLogo: {
    // width: '100%',
    // maxWidth: '100%',
    // margin: '20px auto 0px',
    // textAlign: 'center',
    height: 50,
    width: 50,
  },
  heading_wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '70px',
    flexWrap: 'wrap',
    gap: '20px',
  },
  content_wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexStart',
    marginTop: '20px',
    gap: '15px',
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
          <Image src={EthicalLogo} style={{ height: 40, width: 40 }} />

          <Text style={styles.heading}>My Enhanukujced PDFplzz</Text>
          <Image style={styles.imgg} src={EthicalLogo} />

          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Also please note:
          </Text>
          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Prices described in this estimate don't include taxes, duties (when
            applicable), and shipping.
          </Text>
          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Shipping to one or multiple locations will be estimated by our team
            when after you let us you know the shipping addresses. You will be
            billed according to the price practiced at the time of shipping.
          </Text>

          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Changes on the decoration methods will incur in price alterations in
            the estimate.
          </Text>
          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Inventory availability cannot be guaranteed until order payment is
            made
          </Text>
          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            If the product selected isn't available we will find a similar
            product to replace it.
          </Text>
          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Reach out to our team if you need any help:
          </Text>
          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Email: orders@ethicalswag.com Phone: 1-877-256-6998
          </Text>
          <Text style={{ width: '100%', margin: '50px auto 0px' }}>
            Generated on: Wed, Mar 06, 24
          </Text>

          <Text style={styles.heading_wrapper}>BULK ESTIMATE</Text>

          <Text style={styles.content_wrap}>
            A great "back to school" gift, this 2-in-1 sandwich bag and placemat
            i...
          </Text>

          <Text style={styles.content_wrap}>Price : Starting at $5.47</Text>

          {/* <PDFTable
            tableHeaders={[
              { title: 'Name', value: 'name' },
              { title: 'Gender', value: 'gender' },
              { title: 'Phone', value: 'phone' },
            ]}
            data={tableData}
            heading="Employee Details"
          /> */}
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
