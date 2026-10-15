import type { Partner } from "../types";

const base = "https://www.academiacollege.edu.np/alpha/assets/img/all-img";

function partner(name: string, href: string, file: string): Partner {
  return { name, href, logo: { src: `${base}/${file}`, alt: `${name} logo` } };
}

// Partners listed on the official website.
export const partners: Partner[] = [
  partner("MV Dugar", "https://mvdugar.com/", "mv.png"),
  partner("Classic Tech", "https://classic.com.np/", "classic.png"),
  partner("ITWise Nepal", "https://itwisenepal.com/", "ITWise-Nepal.png"),
  partner("Codeed Incorporated", "https://codeedinc.com/", "Codeed-Incorporated.png"),
  partner("Code IT", "https://codeit.com.np/", "codeitlogo.png"),
  partner("Hotel Country Villa", "https://www.hotelcountryvilla.com/", "countryvillacopy.png"),
  partner("Skill Shikshya", "https://skillshikshya.com/", "skill-shikshya.png"),
  partner("Robo Tech", "https://www.robotechnepal.com.np/", "RoboTech.png"),
  partner("Skill Spark", "https://www.skillspark.com.np/", "skill-spark.png"),
  partner("Gwarko Boys Hostel", "https://www.facebook.com/p/Gwarko-Boys-Hostel-61578738683465/", "gwarko-boys.jpg"),
  partner("Nepal Speakers Bureau", "https://nepalspeakers.com/", "Nepal_Speakers_Bureau.jpg"),
  partner("Namaste Ladies Hostel", "https://www.facebook.com/namasteladiesgroup/", "Namaste-ladies-hostel.jpg"),
  partner("Kohinoor Girls Hostel", "https://www.facebook.com/Kohinoorgirlshostel/", "kohinoor.jfif"),
  partner("AITC", "https://aitc.ai/", "AITC.jfif"),
  partner("CareerKaushal", "https://careerkaushal.com/", "careerka.jpg"),
  partner("Brahmabyte Lab", "https://brahmabytelab.com/", "Brahmabyte.jpg"),
  partner("Nepal Realistic Solution (NRS)", "https://www.nrsnepal.com/", "nrs.jpg"),
  partner("Dlytica Academy", "https://www.dlytica.com/dlytica-academy/", "dlytica.jpg"),
  partner("Evolve IT Hub", "https://www.evolveithub.com/", "evolveithub.jpg"),
  partner("Chakraviu Nepal", "https://chakraviunepal.org/", "chakra.jpg"),
  partner("Seed NanoTech", "https://seed-nanotech.com/", "seednano.jpg"),
  partner("Sums Nepal", "https://www.sumsnepal.com/", "sums_logo.png"),
  partner("Qrius by Qniverse", "https://getqrius.com/", "qrs.jpg"),
];
