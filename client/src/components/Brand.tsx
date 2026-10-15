import { Link } from "react-router-dom";
import { site } from "../data/site";

export default function Brand() {
  return (
    <Link to="/" className="brand" aria-label={`${site.name} home`}>
      <img
        src={site.logo}
        alt=""
        height={48}
        referrerPolicy="no-referrer"
        className="brand__logo"
      />
      <span className="brand__text">
        <span className="brand__name">{site.shortName}</span>
        <span className="brand__sub">International College</span>
      </span>
    </Link>
  );
}
