import ScreenHeaderBtn from "./common/header/ScreenHeaderBtn";

// home screen
import Nearbyjobs from "./home/nearby/Nearbyjobs";
import Popularjobs from "./home/popular/Popularjobs";
import Welcome from "./home/welcome/Welcome";
import LoginScreen from "./login/login";
import SimpleMenu from "./menu/SimpleMenu";
import Splash from "./splash/splash";

// job details screen
import { default as JobAbout } from "./jobdetails/about/About";
import Company from "./jobdetails/company/Company";
import { default as JobFooter } from "./jobdetails/footer/Footer";
import Specifics from "./jobdetails/specifics/Specifics";
import { default as JobTabs } from "./jobdetails/tabs/Tabs";

// common
import NearbyJobCard from "./common/cards/nearby/NearbyJobCard";

export {
  Company, JobAbout,
  JobFooter, JobTabs, LoginScreen, NearbyJobCard, Nearbyjobs,
  Popularjobs, ScreenHeaderBtn, SimpleMenu, Specifics, Splash, Welcome
};

