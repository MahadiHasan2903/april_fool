import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2'
import PageTitle from '../../components/pagetitle'
import Footer from '../../components/footer'
import Scrollbar from '../../components/scrollbar'
import ProjectsS2 from '../../components/ProjectsS2'



const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Projects'} pagesub={'Projects'}/> 
            <ProjectsS2/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;
