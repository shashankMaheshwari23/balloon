import React from 'react'
import HomeView from 'balloon/Views/HomeView/HomeView'
import request from 'balloon/Utils/request'
import { HomeProps } from 'balloon/Views/type'

import { GetServerSideProps } from 'next'
export const getServerSideProps : GetServerSideProps = async () =>{
  // const response = await request.get('public-products-list?pageSize=10&pageNumber=1');
  // const productList = response.data || []
  return {
    props: {
      
    }
  }
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
        <HomeView productList={[]}></HomeView>
    </>
  )
}
export default Home