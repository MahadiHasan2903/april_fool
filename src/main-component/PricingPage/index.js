import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import Pricing from '../../components/Pricing'



const PricingPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Pricing'} pagesub={'Pricing'}/> 
            <Pricing/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default PricingPage;
