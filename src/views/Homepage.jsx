import React from 'react';
import Banner from '../components/banner/Banner';
import Collection from '../components/collection/Collection';
import AddBanner from '../components/addbanner/AddBanner';
import LimitedEdition from '../components/limitedEdition/LimitedEdition';
import CustomProduct from '../components/customProduct/CustomProduct';

export default function Homepage() {
  return (
    <>
      <Banner />
      <Collection />
      <AddBanner />
      <LimitedEdition />
      <CustomProduct />
    </>
  )
}
