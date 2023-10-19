import Navigation from "../navigation/navigation.component";
import SectionAbout from "../section-about/section-about.component";
import SectionContact from "../section-contact/section-contact.component";
import SectionFooter from "../section-footer/section-footer.component";
import SectionHome from "../section-home/section-home.component";
import SectionProjects from "../section-projects/section-projects.component";

const Home = () => {
    return(
        <div className="container">
            <Navigation/>
            <SectionHome/>
            <SectionAbout/>
            <SectionProjects/>
            <SectionContact/>
            <SectionFooter/>
        </div>
    )
}

export default Home;