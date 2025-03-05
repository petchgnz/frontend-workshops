import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faEnvelope,
  faUmbrella,
  faCake,
} from "@fortawesome/free-solid-svg-icons";
import "./ContentServices.css";

const ContentServices = () => {
  return (
    <div className="content-services">
      <div className="content-services-grid">
        <div className="content-services-items">
          <FontAwesomeIcon className="icon" icon={faTruck} />
          <h2>Services Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            delectus officiis obcaecati laboriosam? Qui, totam!
          </p>
        </div>

        <div className="content-services-items">
          <FontAwesomeIcon className="icon" icon={faEnvelope} />
          <h2>Services Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            delectus officiis obcaecati laboriosam? Qui, totam!
          </p>
        </div>

        <div className="content-services-items">
          <FontAwesomeIcon className="icon" icon={faUmbrella} />
          <h2>Services Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            delectus officiis obcaecati laboriosam? Qui, totam!
          </p>
        </div>

        <div className="content-services-items">
          <FontAwesomeIcon className="icon" icon={faCake} />
          <h2>Services Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
            delectus officiis obcaecati laboriosam? Qui, totam!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentServices;
