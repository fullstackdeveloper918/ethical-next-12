import React from 'react'
import Pagination from '../../../components/pagination/Pagination'
import { FaEye, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import Styles from './pages.module.css'
import Layout from '../../../components/super-adminLayout/Layout'

const BlogPost = () => {
  return (
    <>
      <Layout>
        {/* Customer data table */}
        <div className={Styles.Pages_data_table}>
          <table>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
            {Array.from({ length: 13 }).map((data) => (
              <>
                <tr>
                  <td>
                    <div className={Styles.name_cell}>
                      <input type="checkbox" name="" id="" />
                      <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor.
                      </span>
                    </div>
                  </td>

                  <td>
                    <div className={Styles.action_icons}>
                      <span>
                        <FaEye fontSize={18} />
                      </span>
                      <span>
                        <FaRegEdit fontSize={18} />
                      </span>
                      <span>
                        <RiDeleteBin6Line fontSize={18} />
                      </span>
                    </div>
                  </td>
                </tr>
              </>
            ))}
          </table>
          {/* Pagination section */}
          <div className={Styles.pagination_container}>
            <div className={Styles.pagination_content}>
              <Pagination />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BlogPost
