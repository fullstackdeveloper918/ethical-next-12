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
  heading_text: {
    textAlign: 'center',
    fontSize: '12',
    fontWeight: 'normal',
    marginBottom: 10,
  },
  pdf_wrapper: {
    textAlign: 'left',
    fontSize: '12',
    fontWeight: 'normal',
    maxWidth: '800',
    listStyle: 'disc',
    marginBottom: 10,
  },
  heading_wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    flexWrap: 'wrap',
    gap: '20',
  },
  disc_wrap: {
    width: '5',
    height: '5',
    backgroundColor: '#000',
  },
  pdfafter_wrapper: {
    textAlign: 'center',
    fontSize: '12',
    fontWeight: 'normal',
    marginBottom: 10,
    maxWidth: '800',
    listStyle: 'disc',
  },
  pdfafter_wrapper_1: {
    textAlign: 'center',
    fontSize: '12',
    fontWeight: 'normal',
    marginBottom: 10,
    maxWidth: '800',
    listStyle: 'disc',
    marginTop: '40',
  },
  pdfbottom_content: {
    textAlign: 'left',
    fontSize: '12',
    fontWeight: 'normal',
    marginBottom: 10,
    marginTop: '10',
    lineHeight:'22',
  },
  product_content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '20',
    marginTop: '20',
  },
  content_wrap: {
    textAlign: 'left',
    fontSize: '12',
    fontWeight: 'normal',
  },
  content_wrapDescription: {
    textAlign: 'left',
    fontSize: '9',
    fontWeight: 'normal',
    marginTop: '10',
  },
  content_wrap: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexStart',
    marginTop: '20px',
    gap: '15px',
  },
  content_wrap_title:{
    textAlign: 'left',
    fontSize: '10',
    fontWeight: 'normal',
  },
  content_wrapDescription:{
    textAlign: 'left',
    fontSize: '6',
    fontWeight: 'normal',
  },
  container: {
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Align children vertically
    marginBottom: 10, // Add some margin at the bottom
  },
  Product_pdf:{
    flexDirection: 'row', // Arrange children horizontally
    alignItems: 'center', // Align children vertically
    marginBottom: 10,
    gap:20,
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
        
          {/* <Image src={EthicalLogo} style={{ height: 40, width: 40 }} />

          <Text style={styles.heading}>My Enhanukujced PDFplzz</Text>
          <Image style={styles.imgg} src={EthicalLogo} /> */}

          <Text style={styles.heading_text}>Also please note:</Text>
          <Text style={styles.pdf_wrapper}>
            <Text style={styles.disc_wrap}></Text>
            Prices described in this estimate don't include taxes, duties (when
            applicable), and shipping.
          </Text>
          <Text style={styles.pdf_wrapper}>
            Shipping to one or multiple locations will be estimated by our team
            when after you let us you know the shipping addresses. You will be
            billed according to the price practiced at the time of shipping.
          </Text>

          <Text style={styles.pdf_wrapper}>
            Changes on the decoration methods will incur in price alterations in
            the estimate.
          </Text>
          <Text style={styles.pdf_wrapper}>
            Inventory availability cannot be guaranteed until order payment is
            made
          </Text>
          <Text style={styles.pdf_wrapper}>
            If the product selected isn't available we will find a similar
            product to replace it.
          </Text>
          <Text style={styles.pdfafter_wrapper_1}>
            Reach out to our team if you need any help:
          </Text>
          <Text style={styles.pdfafter_wrapper}>
            Email: orders@ethicalswag.com Phone: 1-877-256-6998
          </Text>
          <Text style={styles.pdfafter_wrapper}>
            Generated on: Wed, Mar 06, 24
          </Text>

          <Text style={styles.heading_wrapper}>BULK ESTIMATE</Text>

          <View style={styles.Product_pdf}>
          <Image
            style={styles.imgg}
            src={
              'https://fastly.picsum.photos/id/1050/200/300.jpg?hmac=mMZp1DAD5EpHCZh-YBwfvrg5w327V3DoJQ8CmRAKF70'
            }
          />
         <View>
          <Text style={styles.content_wrap_title}>
            A great "back to school" gift, this 2-in-1 sandwich bag and placemat
            i...
          </Text>

          <Text style={styles.content_wrapDescription}>
            Price : Starting at $5.47
          </Text>
          </View>
          </View>

          {/* <PDFTable
            tableHeaders={[
              { title: 'Name', value: 'name' },
              { title: 'Gender', value: 'gender' },
              { title: 'Phone', value: 'phone' },
            ]}
            data={tableData}
            heading="Employee Details"
          /> */}

          <Text style={styles.pdfbottom_content}>
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
          {/* <View style={styles.container}>
            <Image
              style={styles.image}
              src="https://fastly.picsum.photos/id/1050/200/300.jpg?hmac=mMZp1DAD5EpHCZh-YBwfvrg5w327V3DoJQ8CmRAKF70"
            />
            <Text style={styles.text}>Some text content here... with love</Text>
          </View> */}
  
      </Page>
    </Document>
  )
}

export default Card
