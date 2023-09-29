import Navigation from './components/navigation/navigation.component';
import SectionAbout from './components/section-about/section-about.component';
import SectionContact from './components/section-contact/section-contact.component';
import SectionFooter from './components/section-footer/section-footer.component';
import SectionHome from './components/section-home/section-home.component';
import SectionProjects from './components/section-projects/section-projects.component';


function App() {
  return(
    <div className='container'>
      <Navigation/>
      <SectionHome/>
      <SectionAbout/>
      <SectionProjects/>
      <SectionContact/>
      <SectionFooter/>
    </div>
  )
}

export default App;
